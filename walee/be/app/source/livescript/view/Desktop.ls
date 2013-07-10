qx.Class.define \wl.be.app.view.Desktop,

  extend: wl.core.view.View

  construct: !->
    @base(arguments, \appRoot, \desktop)

  members:

    _composeImpl: (q)->
      
