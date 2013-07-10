qx.Class.define \wl.core.module.security.view.Login,

  extend: wl.core.view.View

  construct: !(slot)->
    @base(arguments, slot, \login-prompt)

  members:

    showPrompt: -> @_show(\prompt)
    showLoading: -> @_show(\loading)
    showFailure: -> @_show(\failure)

    _getComponent: (name)->

      if (@qry name)
        that
      else
        if @_createComponent(name)
          that
        else
          @error("Can't create component `#name`!")


    _createComponent: (name) ->
      q = @aquery!(\^ui)

      switch name

        |\username =>
          (q \form.txt*)(name)!

        |\password =>
          (q \form.txtPassword*)(name)!

        |\login-btn =>
          (q \form.button*)(name)(@tr(\login))
            ..addListener \click, @_bindAction(\login)
            ..

        |\root-slot =>
          root-slot = (q \box.composite*)(\root-slot)(\canvas)

        |\content-slot =>
          (q \groupbox.box*)(\content-slot)("","",\grow)
            @_setContentSlotLayout(.., @_getComponent(\root-slot))
            ..

    _setContentSlotLayout:(root-slot, content-slot) ->

      re-layout = (->
        content-slot.setLayoutProperties(
          @_setContentSlotLayoutImpl(root-slot.getBounds!, content-slot)
        )
      ).bind(@)

      [root-slot, content-slot].forEach -> it.addListener \resize, re-layout

    _show:(state) ->
      @_getComponent(\content-slot)
        ..removeAll!
        ..add(@getUi(state))
      @open!

    actionLogin: ->
      {username: (@qry \username).getValue!, password: (@qry \password).getValue!}
