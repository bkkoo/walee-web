qx.Class.define \wl.be.app.Alias,

  extend: wl.core.aquery.Base

  type: \singleton

  construct: !->
    @base(arguments)
    
  members:

    alias:

      security:

        ctrl:
          main$ : -> new wl.be.app.ctrl.Security
          login : (q, view) -> new wl.core.module.security.ctrl.Login(view)
        view:
          login: -> new wl.be.app.view.Login

      ctrl:
        slotManager$ : -> new wl.be.app.ctrl.SlotManager
