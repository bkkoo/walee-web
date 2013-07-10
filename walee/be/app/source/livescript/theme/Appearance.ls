/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Theme.define "wl.be.app.theme.Appearance",

  extend: qx.theme.modern.Appearance

  appearances:

    "main-app-logo":
      style: ->
        padding: 5

    "main-panel":
      style: ->
        backgroundColor: \main-panel-bg
        padding: [0 0 0 7]
        height: 31

    "main-sideKick":
      style: ->
        backgroundColor: \main-sideKick-bg
        minWidth: 150

    "main-wrkspaces":
      alias: \tabview
      style: ->
        margin: [0 0 1 0]

    "tabview-page/button" :

      style: (states) ->

        useCss = all (-> qx.core.Environment.get it), <[ css.borderradius css.boxshadow css.gradient.linear ]>

        [decorator, padding, margin-top, margin-bottom, margin-left, margin-right] = [0]*6

        if states.checked
          if states.barTop
            decorator = \tabview-page-button-top-active
            padding = [3 4 3 4]
            margin-left = if states.firstTab then -1 else -3
            margin-right = if states.lastTab then -1 else -1
            margin-top = 3
          else if states.barBottom
            decorator = \tabview-page-button-bottom-active
            padding = [2 4 4 4]
            marginLeft = if states.firstTab then 0 else -2
            marginRight = if states.lastTab then 0 else -1
            marginTop = 3
            marginBottom = 5
          else if (states.barRight)
            decorator = \tabview-page-button-right-active
            padding = [4 5]
            marginTop = if states.firstTab then 0 else -2
            marginBottom = if states.lastTab then 0 else -2
            marginLeft = 2
          else
            decorator = \tabview-page-button-left-active
            padding = [4 5]
            marginTop = if states.firstTab then 0 else -2
            marginBottom = if states.lastTab then 0 else -2
        else
          if states.barTop
            decorator = \tabview-page-button-top-inactive
            padding = [1 4 3  4]
            marginTop = 5
            marginLeft = if states.firstTab then 1 else -1
            marginRight = 1
          else if states.barBottom
            decorator = \tabview-page-button-bottom-inactive
            padding = [1 4 2  4]
            marginBottom = 7
            marginLeft = if states.firstTab then 1 else -1
            marginRight = 1
            marginTop = 4
          else if states.barRight
            decorator = \tabview-page-button-right-inactive
            padding = [4 5]
            marginRight = 5
            marginTop = if states.firstTab then 5 else -1
            marginBottom = -1
            marginLeft = 3
          else
            decorator = \tabview-page-button-left-inactive;
            padding = [4 5]
            marginLeft = 5
            marginTop = if states.firstTab then 5 else 1
            marginBottom = -1
            marginRight = 1

        if decorator && useCss then decorator += "-css"

        zIndex : if states.checked then 10 else 5
        decorator : decorator
        padding   : padding
        marginTop : marginTop
        marginBottom : marginBottom
        marginLeft : marginLeft
        marginRight : marginRight
        textColor : if states.disabled then \text-disabled else (if states.checked then \black else \text-inactive)
