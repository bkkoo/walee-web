qx.Class.define "wl.be.app.Application",

  extend: qx.application.Standalone

  include:
    wl.core.aquery.MQuery

  members:

    main: !->
      @base arguments

      if qx.core.Environment.get "qx.debug"
        #support native logging capabilities, e.g. Firebug for Firefox
        qx.log.appender.Native
        #support additional cross-browser console. Press F7 to toggle visibility
        qx.log.appender.Console

        window.pl = require \prelude-ls

        
        @__load-alias!
        @__start(@aquery!)

    __load-alias: !->
      wl.core.alias.Ui.getInstance!
      wl.core.alias.Ctrl.getInstance!
      wl.be.app.alias.View.getInstance!
      wl.be.app.alias.Ctrl.getInstance!

    __start:!(q) ->
      (q \^ctrl.security)!
        ..subscribe(\authenticate.success, (@__loadDesktop).bind(@))
        ..login-prompt!

    __loadDesktop: ->
