qx.Class.define \wl.core.view.Desktop,

  extend: wl.core.view.View

  construct: !->
    @base(arguments, \appRoot, \desktop)

  members:

    _composeImpl: (q)->
      @_createUiComponent!
      qry = @qry

      (qry \logo-slot).add(qry \logo)
