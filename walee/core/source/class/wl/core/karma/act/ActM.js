var AsyncReactor;
AsyncReactor = wl.core.karma.reactor.Async.getInstance();
qx.Class.define('wl.core.karma.act.ActM', {
  extend: qx.core.Object,
  construct: function(_obj, _member, _reactor, filters, converters){
    this._obj = _obj;
    this._member = _member;
    this._reactor = _reactor != null ? _reactor : AsyncReactor;
    this.base(arguments);
    this._incidences = [];
    this._states = [];
    this._observerRemovers = [];
    this.setFilters(filters);
    this.setConverters(converters);
    this._init(this._obj, this._member, this._reactor, this._filters, this._converters);
  },
  destruct: function(){
    this.reset();
    this.unobserve();
    this._obj = this._member = this._filters = this._converters = this._reactor = null;
    this._incidences = this._states = this._obseverRemovers = null;
  },
  members: {
    _init: function(obj, member, reactor, filters, converters){
      var fn;
      fn = obj[member];
      this._onReaction = function(v){
        return fn.call(obj, v);
      };
      return this.observe();
    },
    effect: function(incidence){
      var x$;
      x$ = incidence;
      !this.isMyIncidence(x$) && this._incidences.push(x$);
      x$;
      return x$;
    },
    uneffect: function(incidence){
      this._incidences = this._incidences.filter(function(it){
        return it !== incidence;
      });
      return incidence;
    },
    proceed: function(result, path){
      var me;
      me = this;
      this._incidences.forEach(function(it){
        return it.react(result, me, path);
      });
    },
    react: function(result, cause, path){
      var x$;
      if (this._isNotCyclicRef(path) && this.passedFilters(result, cause, path)) {
        x$ = this._onReaction(this.convert(result));
        this.intercept(x$, path.concat(this));
      } else {
        this._recordAction();
      }
    },
    observe: function(){
      this.unobserve();
      this._observerRemovers.push(aop.afterReturning(this._obj, this._member, this._onAction.bind(this)));
    },
    passedFilters: function(result, cause, path){
      var me;
      me = this;
      return this._filters.reduce(function(p, f){
        return p === true && f(result, cause, path, me) === true;
      }, true);
    },
    isMyIncidence: function(incidence){
      return this._incidences.filter(function(it){
        return it === incidence;
      }).length > 0;
    },
    intercept: function(result, path){
      this._incidences.length && this._reactor.queueCause(this, result, path);
    },
    unobserve: function(){
      var remover;
      while (remover = this._observerRemovers.shift()) {
        remover.remove();
      }
    },
    reset: function(){
      var remover;
      while (remover = this._states.shift()) {
        remover.remove();
      }
    },
    _isNotCyclicRef: function(path){
      var me;
      me = this;
      return path.filter(function(it){
        return it === me;
      }).length === 0;
    },
    _recordAction: function(){
      return this._reactor.recordAction(this);
    },
    _onAction: function(result){
      return this.passedFilters(result, this, []) && this.intercept(this.convert(result), [this]);
    },
    _onReaction: function(result){
      throw new Error("please implement `_onReaction`!");
    },
    convert: function(value){
      return this._converters.reduce(function(v, c){
        return c(v);
      }, value);
    },
    getObj: function(){
      return this._obj;
    },
    getMember: function(){
      return this._member;
    },
    getConverters: function(){
      return this._converters;
    },
    setConverters: function(converters){
      var that;
      this._converters = (that = converters) != null
        ? that
        : [];
    },
    getFilters: function(){
      return this._fitlers;
    },
    setFilters: function(filters){
      var that;
      this._filters = (that = filters) != null
        ? that
        : [];
    },
    getResult: function(){
      return this._result;
    },
    getReactor: function(){
      return this._reactor;
    },
    getIncidences: function(){
      return this._incidences;
    }
  }
});