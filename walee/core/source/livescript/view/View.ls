qx.Class.define \wl.core.view.View,

  extend: qx.core.Object

  include:

    qx.locale.MTranslation
    wl.core.aquery.MQuery
    wl.core.karma.MAction

  construct:!(slot, channel)->
    @base(arguments)
    @_q = @aquery!
    @_slot = slot
    @channel = postal.channel(channel)
    @slotManager = @aquery!(\^ctrl.slotManager)!

  members:

    getUi: (name=\main) ->
      if (@qry "ui.#{name}")
        that
      else
        @_createUi(name)

    _createUi: (name)->
      @_createUiImpl.apply(@, [@aquery!, name])
        @_register-ref("ui.#{name}", ..)
        ..

    qry: (params) ->
      @_q("?#{params}")

    open: ->
      @slotManager.open @getUi(\main), @_slot

    close: ->
      @slotManager.close @getUi(\main), @_slot

    _register-ref: (name, obj)->
      @_obj-ref-reg[name] = obj

    subscribe: (topic, callback) ->
      @channel.subscribe(topic, callback)

    _deferredPublish: (topic, data) ->
      channel = @channel
      qx.util.DeferredCallManager.getInstance!.schedule(
        new qx.util.DeferredCall(-> channel.publish(topic, data))
      )
    _publish: (topic, data) ->
      @channel.publish(topic, data)

    _bindAction: (action, isDeferred=true) ->
      me = @
      actionFn = "action#{qx.lang.String.capitalize(action)}"
      topic = "action-#action"
      (...args) ->
        data = me[actionFn].apply(me, args)
        if (isDeferred)
          me._deferredPublish(topic, data)
        else
          me._publish(topic, data)
