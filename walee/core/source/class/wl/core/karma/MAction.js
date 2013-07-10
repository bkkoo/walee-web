qx.Mixin.define('wl.core.karma.MAction', {
  members: {
    efx1: function(member, obj, objMember, filters, converters){
      var Property, Act, Func;
      Property = wl.core.karma.act.Property1;
      Act = wl.core.karma.act.Act1;
      Func = wl.core.karma.act.Func1;
      return this._efx(Property, Act, Func, member, obj, objMember, filters, converters);
    },
    efxM: function(member, obj, objMember, filters, converters){
      var Property, Act, Func;
      Property = wl.core.karma.act.PropertyM;
      Act = wl.core.karma.act.ActM;
      Func = wl.core.karma.act.FuncM;
      return this._efx(Property, Act, Func, member, obj, objMember, filters, converters);
    },
    _efx: function(Property, Act, Func, member, obj, objMember, filters, converters){
      var x$, cause, incidence;
      x$ = this[member] instanceof Function ? Act : Property;
      cause = new x$(this, member);
      incidence = obj instanceof Function
        ? new Func(obj, void 8, filters, converters)
        : obj[objMember] instanceof Function
          ? new Act(obj, objMember, void 8, filters, converters)
          : new Property(obj, objMember, void 8, filters, converters);
      return cause.effect(incidence);
    }
  }
});