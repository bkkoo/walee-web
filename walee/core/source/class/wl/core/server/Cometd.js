qx.Class.define('wl.core.server.Cometd', {
  extend: qx.core.Object,
  construct: function(url, logLevel){
    var x$;
    x$ = this.cometd = $.cometd;
    x$.configure({
      url: url,
      logLevel: logLevel
    });
  },
  members: {
    handshake: function(){
      return this.cometd.handshake();
    }
  }
});