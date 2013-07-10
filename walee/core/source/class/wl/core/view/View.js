var slice$ = [].slice;
qx.Class.define('wl.core.view.View', {
  extend: qx.core.Object,
  include: [qx.locale.MTranslation, wl.core.aquery.MQuery, wl.core.karma.MAction],
  construct: function(slot, channel){
    this.base(arguments);
    this._q = this.aquery();
    this._slot = slot;
    this.channel = postal.channel(channel);
    this.slotManager = this.aquery()('^ctrl.slotManager')();
  },
  members: {
    getUi: function(name){
      var that;
      name == null && (name = 'main');
      if (that = this.qry("ui." + name)) {
        return that;
      } else {
        return this._createUi(name);
      }
    },
    _createUi: function(name){
      var x$;
      x$ = this._createUiImpl.apply(this, [this.aquery(), name]);
      this._registerRef("ui." + name, x$);
      x$;
      return x$;
    },
    qry: function(params){
      return this._q("?" + params);
    },
    open: function(){
      return this.slotManager.open(this.getUi('main'), this._slot);
    },
    close: function(){
      return this.slotManager.close(this.getUi('main'), this._slot);
    },
    _registerRef: function(name, obj){
      return this._objRefReg[name] = obj;
    },
    subscribe: function(topic, callback){
      return this.channel.subscribe(topic, callback);
    },
    _deferredPublish: function(topic, data){
      var channel;
      channel = this.channel;
      return qx.util.DeferredCallManager.getInstance().schedule(new qx.util.DeferredCall(function(){
        return channel.publish(topic, data);
      }));
    },
    _publish: function(topic, data){
      return this.channel.publish(topic, data);
    },
    _bindAction: function(action, isDeferred){
      var me, actionFn, topic;
      isDeferred == null && (isDeferred = true);
      me = this;
      actionFn = "action" + qx.lang.String.capitalize(action);
      topic = "action-" + action;
      return function(){
        var args, data;
        args = slice$.call(arguments);
        data = me[actionFn].apply(me, args);
        if (isDeferred) {
          return me._deferredPublish(topic, data);
        } else {
          return me._publish(topic, data);
        }
      };
    }
  }
});