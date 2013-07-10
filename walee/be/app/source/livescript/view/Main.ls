qx.Class.define "wl.be.app.view.Main",

  extend: wl.core.view.View

  type: \singleton

  properties:
    appearance:
      init: \main

  members:

    uiPaths: [app: \*]

    compose:(root) ->

      @co.container = @ui \composite (@ui \vbox)
        ..add ( @co.panel = (@view \panel).compose! )
        ..add ( @co.workspaceContainer = @ui \workspaceContainer \bottom ), flex: 1

      root.add @co.container, edge:0

      @

    getWorkspaceContainer: ->
      return @co.workspaceContainer
