qx.Class.define("wl.be.app.view.Main", {
  extend: wl.core.view.View,
  type: 'singleton',
  properties: {
    appearance: {
      init: 'main'
    }
  },
  members: {
    uiPaths: [{
      app: '*'
    }],
    compose: function(root){
      var x$;
      x$ = this.co.container = this.ui('composite', this.ui('vbox'));
      x$.add(this.co.panel = this.view('panel').compose());
      x$.add(this.co.workspaceContainer = this.ui('workspaceContainer', 'bottom'), {
        flex: 1
      });
      root.add(this.co.container, {
        edge: 0
      });
      return this;
    },
    getWorkspaceContainer: function(){
      return this.co.workspaceContainer;
    }
  }
});