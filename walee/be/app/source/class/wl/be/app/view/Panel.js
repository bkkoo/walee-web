qx.Class.define("wl.be.app.view.Panel", {
  extend: qx.ui.container.Composite,
  type: 'singleton',
  implement: wl.core.view.IView,
  include: [wl.core.view.MView, wl.be.app.MPack],
  properties: {
    appearance: {
      refine: true,
      init: 'main-panel'
    }
  },
  members: {
    uiPaths: [{
      app: '*'
    }],
    compose: function(){
      var x$;
      x$ = this;
      x$.setLayout(this.ui('hbox'));
      x$.add(this.co.appLogo = this.ui('app-logo'));
      return this;
    }
  }
});