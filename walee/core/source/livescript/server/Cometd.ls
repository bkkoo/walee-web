qx.Class.define \wl.core.server.Cometd,

  extend: qx.core.Object

  construct: !(url, log-level) ->
    #todo: get cometd from alias system
    @cometd = $.cometd
      ..configure {url: url, log-level: log-level}

  members:
    handshake: ->
      @cometd.handshake!
