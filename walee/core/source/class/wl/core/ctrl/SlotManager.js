qx.Class.define('wl.core.ctrl.SlotManager', {
  extend: qx.core.Object,
  construct: function(){
    this.base(arguments);
    this.appRoot = qx.core.Init.getApplication().getRoot();
  },
  members: {
    slotOf: function(method, slot){
      var that;
      if ((that = this["$" + slot]) != null) {
        if ((that = that[method]) != null) {
          return that;
        } else {
          return this.error("Method `" + method + "` for slot `" + slot + "` is not defined!");
        }
      } else {
        return this.error("Slot `" + slot + "` is not defined!");
      }
    },
    open: function(box, slot){
      return this.slotOf('open', slot).call(this, box);
    },
    close: function(box, slot){
      return this.slotOf('close', slot).call(this, box);
    },
    $appRoot: {
      open: function(box){
        return this.appRoot.add(box, {
          edge: 0
        });
      },
      close: function(box){
        return this.appRoot.remove(box);
      }
    }
  }
});