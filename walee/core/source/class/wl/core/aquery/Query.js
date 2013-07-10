var toString$ = {}.toString, slice$ = [].slice;
qx.Class.define('wl.core.aquery.Query', {
  extend: qx.core.Object,
  construct: function(registry){
    this.base(arguments);
    this._lastQry = void 8;
    this._lastFactory = void 8;
    this._useAttrs = {};
    if (registry && toString$.call(registry).slice(8, -1) !== 'Object') {
      this.error("Wrong type of registry for object!");
    }
    this._objRefReg = registry;
  },
  members: {
    getFactoryReg: function(){
      return wl.core.aquery.Base.registry;
    },
    query: function(expr, path){
      var prefix, that;
      switch (toString$.call(expr).slice(8, -1)) {
      case 'String':
        switch (prefix = expr[0]) {
        case '^':
          return this.queryExpr(expr, path);
        case '?':
          return this['?'](expr.slice(1));
        default:
          if ((that = this._lastQry) != null) {
            return that(expr);
          } else {
            return this.error("No last query for relative reference `" + expr + "`");
          }
        }
        break;
      case 'Object':
        return this._useAttrs = this._emptyToVoid(expr);
      }
    },
    queryExpr: function(expr, path){
      var that;
      return ((that = this[expr[0]]) != null
        ? that
        : this['+']).call(this, expr, path);
    },
    '^': function(_ref){
      var ref$, ref0, defAttrsFlag, ref, reg, fn, qInfo;
      ref$ = _ref.split('*'), ref0 = ref$[0], defAttrsFlag = ref$[1];
      ref = ref0.slice(1);
      reg = this.getFactoryReg();
      if (fn = reg[ref]) {
        switch (fn.__type) {
        case 'Query':
          return this._genLastQry(fn);
        case 'Factory':
          qInfo = this._genQInfo(ref, fn);
          this._genLastQry(reg[qInfo.path]);
          return this._genLastFactory(fn, qInfo, defAttrsFlag);
        }
      } else {
        return this.error("Reference `" + ref + "` is not found!");
      }
    },
    '+': function(ref, path){
      return this['^'](path
        ? "^" + path + "." + ref
        : "^" + ref);
    },
    '.': function(_ref, path){
      var dots, newPath, ref, newRef;
      dots = (/^\.*/.exec(_ref))[0].length;
      newPath = path.split('.').slice(0, dots);
      ref = _ref.slice(dots);
      newRef = ref === ""
        ? newPath.join('.')
        : newPath.concat(ref).join('.');
      return this['^']("^" + newRef);
    },
    '_': function(_ref, path){
      var ref, that;
      ref = _ref.slice(1);
      if (ref === "") {
        if ((that = this._lastFactory) != null) {
          return that;
        } else {
          return this.error("No last factory!");
        }
      } else {
        if ((that = this._lastQry) != null) {
          return that(ref);
        } else {
          return this.error("No last query!");
        }
      }
    },
    '?': function(ref){
      var that;
      if (that = this._nullVoidToEmpty(this._objRefReg)) {
        if ((that = that[ref]) != null) {
          return that;
        } else if (qx.core.Environment.get('qx.debug')) {
          return this.warn("Ref `" + ref + "` is not in registry");
        }
      } else {
        return this.error("Object Reference Registry is not provided!");
      }
    },
    _isEmpty: function(obj){
      return Object.keys(obj).length === 0;
    },
    _emptyToVoid: function(obj){
      if (this._isEmpty(obj)) {} else {
        return obj;
      }
    },
    _nullVoidToEmpty: function(v){
      if (v) {
        return v;
      } else {
        return {};
      }
    },
    _mapToPairs: function(obj){
      return Object.keys(obj).map(function(it){
        return [it, obj[it]];
      });
    },
    _nullVoidToArr0: function(arr){
      if (deepEq$(arr, void 8, '===')) {
        return [];
      } else {
        return arr;
      }
    },
    _genQInfo: function(ref, fn){
      return {
        path: fn.__path,
        factoryRef: ref.split('.').slice(-1)[0]
      };
    },
    _mergeAttrs: function(target, src){
      this._mapToPairs(src).forEach(function(it){
        var targetV, srcV;
        targetV = target[it[0]];
        srcV = toString$.call(targetV).slice(8, -1) === 'Array'
          ? (toString$.call(it[1]).slice(8, -1) === 'Array'
            ? it[1]
            : [it[1]]).filter(function(sv){
            return !qx.lang.Array.contains(targetV, sv);
          }).concat(targetV)
          : it[1];
        return target[it[0]] = srcV;
      });
      return target;
    },
    _genObjAttrs: function(obj, qInfo){
      var defaultAttr, x$;
      defaultAttr = obj.getUserData ? obj.getUserData('attrs') : null;
      x$ = this._emptyToVoid([defaultAttr, this._useAttrs, qInfo.attrs].map(function(it){
        return this._nullVoidToEmpty(it);
      }.bind(this)).map(function(it){
        return this._serializeAttrs(it);
      }.bind(this)).reduce(function(a, b){
        return this._mergeAttrs(a, b);
      }.bind(this)));
      qInfo.attrs = x$;
      return x$;
    },
    _genLastQry: function(fn){
      return this._lastQry = function(expr){
        return fn.call(this, expr);
      }.bind(this);
    },
    _genLastFactory: function(fn, qInfo, defAttrsFlag){
      var factory;
      factory = function(){
        var args, obj, attrs;
        args = slice$.call(arguments);
        obj = fn.apply(fn.__context, [qInfo].concat(args));
        if (attrs = this._genObjAttrs(obj, qInfo)) {
          if (obj.setUserData) {
            obj.setUserData('attrs', attrs);
          }
          this._registerObjRef(obj, attrs.id, attrs.grp);
        }
        return obj;
      }.bind(this);
      return this._lastFactory = defAttrsFlag === "" ? function(attrs){
        qInfo.attrs = attrs;
        return factory;
      } : factory;
    },
    _serializeAttrs: function(attrs){
      var chk, that;
      if (toString$.call(attrs).slice(8, -1) === 'String') {
        chk = function(flag, fn){
          var a;
          if ((a = attrs.split(flag)).length > 1) {
            return fn(a);
          }
        };
        if (that = chk('.', function(it){
          return {
            id: it[1],
            grp: [it[0]]
          };
        })) {
          return that;
        } else if (that = chk('|', function(it){
          return {
            grp: it
          };
        })) {
          return that;
        } else {
          return {
            id: attrs
          };
        }
      } else {
        this._mapToPairs(attrs).forEach(function(it){
          var x$;
          if (toString$.call(it[1]).slice(8, -1) === 'String') {
            x$ = it[1].split('|');
            attrs[it[0]] = x$.length > 1
              ? x$
              : [it[1]];
            return x$;
          }
        });
        return attrs;
      }
    },
    _registerObjRef: function(obj, id, grp){
      var reg, grpKeys, x$, chk1, chk2, register;
      reg = this._objRefReg;
      if (reg && (id || grp)) {
        grpKeys = (x$ = this._nullVoidToArr0(grp).map(function(it){
          return "." + it;
        }), x$.forEach(function(it){
          return (reg[it] = this._nullVoidToArr0(reg[it])).push(obj);
        }.bind(this)), x$, x$);
      }
      if (id) {
        chk1 = function(it){
          if (!!reg[it]) {
            return this.error("Ref for `" + it + "` is already exists!");
          } else {
            return true;
          }
        };
        chk2 = function(it){
          if (!!reg[it]) {
            return false;
          } else {
            return true;
          }
        };
        register = function(it){
          return reg[it] = obj;
        };
        grpKeys.map(function(it){
          return it + "." + id;
        }).forEach(function(it){
          return chk1(it) && register(it);
        });
        return (grpKeys.length ? chk2 : chk1)(id) && register(id);
      }
    }
  }
});
function deepEq$(x, y, type){
  var toString = {}.toString, hasOwnProperty = {}.hasOwnProperty,
      has = function (obj, key) { return hasOwnProperty.call(obj, key); };
  first = true;
  return eq(x, y, []);
  function eq(a, b, stack) {
    var className, length, size, result, alength, blength, r, key, ref, sizeB;
    if (a == null || b == null) { return a === b; }
    if (a.__placeholder__ || b.__placeholder__) { return true; }
    if (a === b) { return a !== 0 || 1 / a == 1 / b; }
    className = toString.call(a);
    if (toString.call(b) != className) { return false; }
    switch (className) {
      case '[object String]': return a == String(b);
      case '[object Number]':
        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        return +a == +b;
      case '[object RegExp]':
        return a.source == b.source &&
               a.global == b.global &&
               a.multiline == b.multiline &&
               a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') { return false; }
    length = stack.length;
    while (length--) { if (stack[length] == a) { return true; } }
    stack.push(a);
    size = 0;
    result = true;
    if (className == '[object Array]') {
      alength = a.length;
      blength = b.length;
      if (first) { 
        switch (type) {
        case '===': result = alength === blength; break;
        case '<==': result = alength <= blength; break;
        case '<<=': result = alength < blength; break;
        }
        size = alength;
        first = false;
      } else {
        result = alength === blength;
        size = alength;
      }
      if (result) {
        while (size--) {
          if (!(result = size in a == size in b && eq(a[size], b[size], stack))){ break; }
        }
      }
    } else {
      if ('constructor' in a != 'constructor' in b || a.constructor != b.constructor) {
        return false;
      }
      for (key in a) {
        if (has(a, key)) {
          size++;
          if (!(result = has(b, key) && eq(a[key], b[key], stack))) { break; }
        }
      }
      if (result) {
        sizeB = 0;
        for (key in b) {
          if (has(b, key)) { ++sizeB; }
        }
        if (first) {
          if (type === '<<=') {
            result = size < sizeB;
          } else if (type === '<==') {
            result = size <= sizeB
          } else {
            result = size === sizeB;
          }
        } else {
          first = false;
          result = size === sizeB;
        }
      }
    }
    stack.pop();
    return result;
  }
}