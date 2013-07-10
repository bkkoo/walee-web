qx.Class.define('wl.core.karma.reactor.Async', {
  extend: wl.core.karma.reactor.Reactor,
  type: 'singleton',
  construct: function(){
    this.base(arguments);
    this._waiting();
  },
  members: {
    _waiting: function(){
      return this._schedulerRemover = aop.afterReturning(this, 'queueCause', this._schedule.bind(this));
    },
    _schedule: function(){
      var proceed, waiting;
      this._schedulerRemover.remove();
      proceed = this._proceed.bind(this);
      waiting = this._waiting.bind(this);
      qx.util.DeferredCallManager.getInstance().schedule(new qx.util.DeferredCall(function(){
        proceed();
        return waiting();
      }));
    }
  }
});