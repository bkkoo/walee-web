qx.Class.define("wl.be.app.view.SideKick", {
  extend: qx.ui.container.Composite,
  type: 'singleton',
  include: [wl.core.view.MView, wl.be.app.MPack],
  implement: wl.core.view.IView,
  properties: {
    appearance: {
      refine: true,
      init: 'main-sideKick'
    }
  },
  members: {
    compose: function(){
      this.setLayout(this.ui('hbox'));
      return this;
    }
  }
});