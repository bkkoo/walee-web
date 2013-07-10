qx.Class.define("wl.core.karma.reactor.Reactor", {
  extend: qx.core.Object,
  construct: function(){
    this._causes = [];
    this._actions = [];
  },
  destruct: function(){
    this._causes = this._actions = null;
  },
  members: {
    recordAction: function(action){
      var x$;
      x$ = this._actions;
      x$.filter(function(it){
        return it === action;
      }).length === 0 && x$.push(action);
      return x$;
    },
    queueCause: function(action, result, path, isLast){
      var x$;
      isLast == null && (isLast = false);
      this.recordAction(action);
      x$ = {
        action: action,
        result: result,
        path: path
      };
      if (isLast) {
        this._causes.push(x$);
      } else {
        this._causes.unshift(x$);
      }
    },
    _proceed: function(){
      var x$, cause, y$;
      x$ = this._causes;
      while (cause = x$.shift()) {
        y$ = cause;
        y$.action.proceed(y$.result, y$.path);
      }
      this._reset();
    },
    _reset: function(){
      this._actions.forEach(function(it){
        return it.reset();
      });
    }
  }
});