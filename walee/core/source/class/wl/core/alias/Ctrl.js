qx.Class.define('wl.core.alias.Ctrl', {
  extend: wl.core.aquery.Base,
  type: 'singleton',
  construct: function(){
    this.base(arguments, 'ctrl');
  },
  members: {
    alias: {
      'login': function(q, view){
        return new wl.core.ctrl.Login(view);
      }
    }
  }
});