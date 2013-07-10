qx.Class.define('wl.core.module.security.ctrl.Security', {
  extend: qx.core.Object,
  include: wl.core.aquery.MQuery,
  construct: function(){
    this.channel = postal.channel('security.event');
    this.subscribe('authenticate.request', function(data){
      return this.authenticate(data.username, data.password);
    }.bind(this));
  },
  members: {
    authenticate: function(username, password){
      return this._authenticate(username, password, function(rs){
        var msg;
        msg = rs.isSuccess() ? 'success' : 'failure';
        return this.channel.publish("authenticate." + msg, {
          data: rs.getValue()
        });
      }.bind(this));
    },
    subscribe: function(topic, callback){
      return this.channel.subscribe(topic, callback);
    },
    loginPrompt: function(){
      return this.aquery()('^ctrl.login')().prompt();
    }
  }
});