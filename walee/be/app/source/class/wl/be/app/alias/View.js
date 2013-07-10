qx.Class.define('wl.be.app.alias.View', {
  extend: wl.core.aquery.Base,
  type: 'singleton',
  construct: function(){
    this.base(arguments, 'view');
  },
  members: {
    alias: {
      'login': function(){
        return new wl.be.app.view.Login;
      }
    }
  }
});