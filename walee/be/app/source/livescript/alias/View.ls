qx.Class.define \wl.be.app.alias.View,

  extend: wl.core.aquery.Base

  type: \singleton

  construct: !->
    @base(arguments, \view)

  members:
    alias:
      \login : -> new wl.be.app.view.Login
