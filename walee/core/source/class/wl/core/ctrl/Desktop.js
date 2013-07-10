qx.Class.define('wl.core.ctrl.Desktop', {
  extend: qx.core.Object,
  include: wl.core.aquery.MQuery,
  construct: function(){
    var x$;
    x$ = this.view = this.aquery()('^view.desktop')();
    x$.subscribe('reInit', this._init.bind(this));
    this._init();
  },
  members: {
    _init: this._initImpl(function(result){
      if (result.success()) {
        return this._createDesktop(result.getValue());
      } else {
        return this.view.showTryReInit();
      }
    }.bind(this)),
    _createDesktop: function(data){
      return this.error("`createDesktop` method is not implemented!");
    }
  }
});