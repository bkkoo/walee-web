qx.Class.define "wl.core.Application",

  extend: qx.application.Standalone

  members:

    main: ->

      @base arguments

      if qx.core.Environment.get "qx.debug"
        #support native logging capabilities, e.g. Firebug for Firefox
        qx.log.appender.Native
        #support additional cross-browser console. Press F7 to toggle visibility
        qx.log.appender.Console
