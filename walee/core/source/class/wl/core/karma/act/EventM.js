var slice$ = [].slice;
qx.Class.define('wl.core.karma.act.EventM', {
  extend: wl.core.karma.act.ActM,
  construct: function(obj, event, fireEvent, reactor, filters, converters){
    var listener;
    this._onReaction = fireEvent;
    listener = this._listener = {
      notify: function(v){
        return v;
      }
    };
    this.base(arguments, this._listener, 'notify', reactor, filters, converters);
    obj.addListener(event, function(){
      var args;
      args = slice$.call(arguments);
      return listener.notify(args);
    });
  }
});