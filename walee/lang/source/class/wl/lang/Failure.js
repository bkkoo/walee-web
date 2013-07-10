qx.Class.define('wl.lang.Failure', {
  extend: wl.lang.Validation,
  members: {
    failure: function(fn){
      return new wl.lang.Failure(fn(this.getValue()));
    }
  }
});