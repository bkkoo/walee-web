qx.Class.define('wl.be.app.Alias', {
  extend: wl.core.aquery.Base,
  type: 'singleton',
  construct: function(){
    this.base(arguments);
  },
  members: {
    alias: {
      security: {
        ctrl: {
          main$: function(){
            return new wl.be.app.ctrl.Security;
          },
          login: function(q, view){
            return new wl.core.module.security.ctrl.Login(view);
          }
        },
        view: {
          login: function(){
            return new wl.be.app.view.Login;
          }
        }
      },
      ctrl: {
        slotManager$: function(){
          return new wl.be.app.ctrl.SlotManager;
        }
      }
    }
  }
});