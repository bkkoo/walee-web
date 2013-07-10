qx.Class.define('wl.lang.Success', {
  extend: wl.lang.Validation,
  members: {
    map: function(fn){
      return new wl.lang.Success(fn(this.getValue()));
    },
    isSuccess: function(){
      return true;
    },
    success: function(fn){
      return this.map(fn);
    }
  }
});