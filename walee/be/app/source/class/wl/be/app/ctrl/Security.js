qx.Class.define('wl.be.app.ctrl.Security', {
  extend: wl.core.module.security.ctrl.Security,
  members: {
    _authenticate: function(username, password, callback){
      if (username === 'admin' && password === 'admin') {
        return setTimeout(function(){
          return callback(new wl.lang.Success("abc"));
        }, 1000);
      } else {
        return setTimeout(function(){
          return callback(new wl.lang.Failure("Invalid username or password!"));
        }, 1000);
      }
    }
  }
});