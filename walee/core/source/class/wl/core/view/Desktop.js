qx.Class.define('wl.core.view.Desktop', {
  extend: wl.core.view.View,
  construct: function(){
    this.base(arguments, 'appRoot', 'desktop');
  },
  members: {
    _composeImpl: function(q){
      var qry;
      this._createUiComponent();
      qry = this.qry;
      return qry('logo-slot').add(qry('logo'));
    }
  }
});