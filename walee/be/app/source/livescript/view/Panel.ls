qx.Class.define "wl.be.app.view.Panel",

  extend: qx.ui.container.Composite

  type: 'singleton'

  implement:
    wl.core.view.IView

  include:
    wl.core.view.MView
    wl.be.app.MPack

  properties:

    appearance: refine: true init: \main-panel

  members:

    uiPaths: [ app:\* ]

    compose: ->
      @
        ..setLayout (@ui \hbox)
        ..add ( @co.appLogo = (@ui \app-logo) )
      @
