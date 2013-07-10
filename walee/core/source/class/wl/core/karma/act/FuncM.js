qx.Class.define('wl.core.karma.act.FuncM', {
  extend: wl.core.karma.act.ActM,
  include: [wl.core.karma.act.MFunc],
  construct: function(obj, reactor, filters, converters){
    this.base(arguments, obj, 'act', reactor, filters, converters);
  }
});