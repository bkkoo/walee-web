qx.Class.define('wl.core.module.security.ctrl.Login', {
  extend: qx.core.Object,
  include: wl.core.aquery.MQuery,
  construct: function(){
    var x$, y$;
    x$ = this.view = this.aquery()('^view.login')();
    x$.subscribe('action-login', this._login.bind(this));
    y$ = this.securityChannel = postal.channel('security.event');
    y$.subscribe('authenticate.success', this._authenticate.success.bind(this));
    y$.subscribe('authenticate.failure', this._authenticate.failure.bind(this));
  },
  members: {
    prompt: function(){
      return this.view.showPrompt();
    },
    _login: function(params){
      this.view.showLoading();
      return this.securityChannel.publish('authenticate.request', params);
    },
    _authenticate: {
      success: function(){
        return this.view.close();
      },
      failure: function(data){
        return this.view.showFailure();
      }
    }
  }
});