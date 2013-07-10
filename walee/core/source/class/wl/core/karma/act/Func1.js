qx.Class.define('wl.core.karma.act.Func1', {
  extend: wl.core.karma.act.Act1,
  include: [wl.core.karma.act.MFunc],
  construct: function(obj, reactor, filters, converters){
    this.base(arguments, obj, 'act', reactor, filters, converters);
  }
});