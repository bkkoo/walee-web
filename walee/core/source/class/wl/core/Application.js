qx.Class.define("wl.core.Application", {
  extend: qx.application.Standalone,
  members: {
    main: function(){
      this.base(arguments);
      if (qx.core.Environment.get("qx.debug")) {
        qx.log.appender.Native;
        return qx.log.appender.Console;
      }
    }
  }
});