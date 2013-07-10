qx.Mixin.define('wl.core.karma.act.MProperty', {
  members: {
    _init: function(obj, member){
      var x$, get, set, that;
      x$ = qx.lang.String.capitalize(member);
      get = "get" + x$;
      this._member = set = "set" + x$;
      this._property = member;
      this._getFn = (that = obj[get])
        ? that
        : obj[get] = function(){
          return obj[member];
        };
      this._setFn = (that = obj[set])
        ? that
        : obj[set] = function(v){
          return obj[member] = v;
        };
      this._onReaction = function(v){
        this._setFn.call(obj, v);
        return this._getFn.call(obj);
      };
      return this.observe();
    },
    getProperty: function(){
      return this._property;
    },
    _onAction: function(){
      var x$;
      x$ = this._getFn();
      this.passedFilters(x$, this, []) && this.intercept(this.convert(x$), [this]);
      return x$;
    }
  }
});