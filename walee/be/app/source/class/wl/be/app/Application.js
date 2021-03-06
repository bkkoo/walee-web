qx.Class.define("wl.be.app.Application", {
  extend: qx.application.Standalone,
  include: wl.core.aquery.MQuery,
  members: {
    main: function(){
      this.base(arguments);
      if (qx.core.Environment.get("qx.debug")) {
        qx.log.appender.Native;
        qx.log.appender.Console;
        window.pl = require('prelude-ls');
        this.__loadAlias();
        this.__start(this.aquery());
      }
    },
    __loadAlias: function(){
      wl.core.alias.Ui.getInstance();
      wl.be.app.Alias.getInstance();
    },
    __start: function(q){
      var x$;
      x$ = q('^security.ctrl.main')();
      x$.subscribe('authenticate.success', this.__loadDesktop.bind(this));
      x$.loginPrompt();
    },
    __loadDesktop: function(){}
  }
});