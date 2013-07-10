qx.Class.define \wl.core.alias.Ctrl,

  extend: wl.core.aquery.Base

  type: \singleton

  construct: !->
    @base(arguments, \ctrl)

  members:
    alias:
      \login : (q, view) -> new wl.core.ctrl.Login(view)
