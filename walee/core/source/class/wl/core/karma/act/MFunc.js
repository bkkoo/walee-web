var slice$ = [].slice;
qx.Mixin.define('wl.core.karma.act.MFunc', {
  members: {
    _init: function(obj){
      var x$;
      x$ = obj;
      x$.act = function(){
        var args;
        args = slice$.call(arguments);
        return x$.apply(this, args);
      };
      this._onReaction = x$.act;
      return this.observe();
    }
  }
});