qx.Class.define('wl.core.karma.act.Act1', {
  extend: wl.core.karma.act.ActM,
  members: {
    intercept: function(result, path){
      this._result = result;
      this.queueCause(result, path);
    },
    proceed: function(result, path){
      this.base(arguments, this._result, path);
      this._freezeInterception();
    },
    react: function(result, cause, path){
      this.base(arguments, result, cause, path);
      this._freezeReaction();
    },
    queueCause: function(result, path){
      this._incidences.length && this._reactor.queueCause(this, result, path);
      this._freezeQueueCause();
    },
    _freezeReaction: function(){
      this._states.push(aop.around(this, 'react', function(){}));
    },
    _freezeQueueCause: function(){
      return this._states.push(aop.around(this, 'queueCause', function(){}));
    },
    _freezeInterception: function(){
      this._states.push(aop.around(this, 'intercept', function(){}));
    }
  }
});