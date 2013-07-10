qx.Class.define('wl.be.app.alias.Ctrl', {
  extend: wl.core.aquery.Base,
  type: 'singleton',
  construct: function(){
    this.base(arguments, 'ctrl');
    this._singleInstanceReg = {};
  },
  members: {
    _instanceOf: function(name, factory){
      var that;
      if (that = this._singleInstanceReg[name]) {
        return that;
      } else {
        return this._singleInstanceReg[name] = factory();
      }
    },
    alias: {
      security: function(q){
        return this._instanceOf(q.factoryRef, function(){
          return new wl.be.app.ctrl.Security;
        });
      },
      slotManager: function(q){
        return this._instanceOf(q.factoryRef, function(){
          return new wl.be.app.ctrl.SlotManager;
        });
      }
    }
  }
});