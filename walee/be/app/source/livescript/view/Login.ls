qx.Class.define \wl.be.app.view.Login,

  extend: wl.core.module.security.view.Login

  construct: !->
    @base(arguments, \appRoot)

  members:

    _createUiImpl:(q, name) ->

      switch name
        |\main =>
          @_getComponent(\root-slot)
            ..add @_getComponent(\content-slot)
            ..

        |\prompt =>
          form = (q \^ui.form.form)!

          [\username, \password].forEach((->
            form.add @_getComponent(it), @tr(it)
          ),@)

          @_getComponent(\btn-login)
            ..set-margin-right(5)
            form.addButton ..
        
          (q \..rendererSinglePlaceholder)(form)
            ..set(paddingTop:8 paddingLeft:5 width:200)
            ..

        |\failure =>
          (q \^ui.form.button)(@tr("try-again"))
            ..addListener \click, @showPrompt.bind(@)
            btn = ..

          (q \.box.composite)(\hbox)
            ..add (q \.form.label)(@tr("AuthenticatingFailure!"))
            ..add btn
            ..

        |\loading =>
          (q \^ui.form.label)(@tr(\Authenticating..))

    _setContentSlotLayoutImpl: (bound, slot) ->
      slot-bound = slot.getBounds!
      calc = ->
        rs = bound[it] - slot-bound[it]
        if rs < 0 then 0 else Math.round(rs / 2) - 50

      left: calc(\width), top: calc(\height)
