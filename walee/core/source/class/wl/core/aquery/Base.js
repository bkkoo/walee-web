var toString$ = {}.toString, slice$ = [].slice;
qx.Class.define('wl.core.aquery.Base', {
  statics: {
    registry: {}
  },
  extend: qx.core.Object,
  include: [wl.core.aquery.MQuery],
  construct: function(name){
    var reg, alias, queue, registers, r, obj, path, refs;
    this.base(arguments);
    if (this.alias) {
      reg = this.getReg();
      alias = name
        ? name.split('.').reverse().reduce(function(a, b){
          var r, ref$;
          return r = (ref$ = {}, ref$[b + ""] = a, ref$);
        }, this.alias)
        : this.alias;
      queue = [[alias, void 8]];
      registers = [
        [
          function(r){
            return toString$.call(r.v).slice(8, -1) === 'Function';
          }, partialize$.apply(this, [this._regFn, [reg, void 8], [1]])
        ], [
          function(r){
            return toString$.call(r.v).slice(8, -1) === 'Object';
          }, partialize$.apply(this, [this._regObj, [reg, queue, void 8], [2]])
        ], [
          function(r){
            return toString$.call(r.v).slice(8, -1) === 'Array';
          }, partialize$.apply(this, [this._regArr, [reg, void 8], [1]])
        ]
      ];
      while (r = queue.shift()) {
        obj = r[0], path = r[1];
        refs = Object.keys(obj).map(fn$);
        registers.forEach(fn1$);
      }
    }
    function fn$(it){
      var key, that;
      key = ((that = path) ? that + "." : "") + it;
      return {
        v: obj[it],
        key: key,
        path: path
      };
    }
    function fn1$(it){
      return refs.filter(it[0]).forEach(it[1]);
    }
  },
  members: {
    _singleOf: function(arg, factory){
      var ref, that, name;
      ref = (that = this._singleInstanceRef) != null
        ? that
        : this._singleInstanceRef = {};
      name = arg[0].factoryRef;
      if (that = ref[name]) {
        return that;
      } else {
        return ref[name] = factory.apply(this, arg);
      }
    },
    getReg: function(){
      return this.self(arguments).registry;
    },
    __asFactory: function(fn, name, path){
      fn.__type = 'Factory';
      fn.__context = this;
      fn.__name = name;
      fn.__path = path;
      return fn;
    },
    __asQuery: function(path){
      var fn;
      fn = function(expr){
        return this.queryExpr(expr, path);
      };
      fn.__type = 'Query';
      fn.__name = path;
      return fn;
    },
    _regFn: function(reg, rec){
      var ref$, key, fn;
      ref$ = rec.key.slice(-1) === '$'
        ? [
          rec.key.slice(0, -1), function(){
            return this._singleOf(arguments, rec.v);
          }
        ]
        : [rec.key, rec.v], key = ref$[0], fn = ref$[1];
      if (!!reg[key]) {
        this.warn("Existing factory alias `" + key + "` will be overriden!");
      }
      return reg[key] = this.__asFactory(fn, key, rec.path);
    },
    _regObj: function(reg, queue, rec){
      var key;
      key = rec.key;
      if (!reg[key]) {
        reg[key] = this.__asQuery(key);
      }
      return queue.push([rec.v, key]);
    },
    _regArr: function(reg, rec){
      var key;
      key = rec.key;
      if (!reg[key]) {
        reg[key] = this.__asQuery(key);
      }
      return rec.v.map(function(it){
        if (toString$.call(it[0]).slice(8, -1) === 'String') {
          return [[it[0]], it[1]];
        } else {
          return it;
        }
      }).forEach(function(it){
        var fn;
        fn = this.__asFactory(it[1], it[0].join(","), key);
        return it[0].forEach(function(subKey){
          return reg[key + ("." + subKey)] = fn;
        });
      }.bind(this));
    }
  }
});
function partialize$(f, args, where){
  var context = this;
  return function(){
    var params = slice$.call(arguments), i,
        len = params.length, wlen = where.length,
        ta = args ? args.concat() : [], tw = where ? where.concat() : [];
    for(i = 0; i < len; ++i) { ta[tw[0]] = params[i]; tw.shift(); }
    return len < wlen && len ?
      partialize$.apply(context, [f, ta, tw]) : f.apply(context, ta);
  };
}