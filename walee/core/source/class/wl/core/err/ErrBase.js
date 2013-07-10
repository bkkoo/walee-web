qx.Class.define("wl.core.err.ErrBase", {
  extend: Error,
  construct: function(message){
    this;
    this.message = message;
  },
  members: {
    toString: function(){
      var that;
      return this.basename + ((that = this.message) ? " : " + that : "");
    }
  }
});