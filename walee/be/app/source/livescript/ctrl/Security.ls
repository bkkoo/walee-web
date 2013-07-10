qx.Class.define \wl.be.app.ctrl.Security,

  extend: wl.core.module.security.ctrl.Security

  members:

    _authenticate: (username, password, callback) ->
      if (username == \admin && password == \admin)
        setTimeout (-> callback(new wl.lang.Success("abc"))), 1000
      else
        setTimeout (-> callback(new wl.lang.Failure("Invalid username or password!"))), 1000

