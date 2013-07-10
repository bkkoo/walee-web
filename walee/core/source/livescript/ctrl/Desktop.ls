qx.Class.define \wl.core.ctrl.Desktop,

  extend: qx.core.Object

  include:
    wl.core.aquery.MQuery

  construct: !->
    @view = @aquery!(\^view.desktop)!
      ..subscribe(\reInit, @_init.bind(@))
    @_init!

  members:
    _init:
      @_initImpl ((result)->
        if result.success!
          @_createDesktop(result.getValue!)
        else
          @view.showTryReInit!
      ).bind(@)

    _createDesktop: (data)->
      @error("`createDesktop` method is not implemented!")




