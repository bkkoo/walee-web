qx.Class.define('wl.be.app.ctrl.Main', {
  extend: qx.core.Object,
  include: [wl.be.app.MPack, wl.core.objres.MRes, wl.core.view.MViewFor, wl.core.view.MUiFor],
  type: 'singleton',
  members: {
    init: function(){
      var x$;
      this._mainView = this.view('main').compose(this.view('mainRoot'));
      this._workspaceContainer = this._mainView.getWorkspaceContainer();
      x$ = this.neural = this.createWorkspace('Neural');
      x$.setLayout(this.ui('grow'));
      x$.add(this.ui('act-indy'));
      return this.loadNeural();
    },
    loadNeural: function(){},
    createWorkspace: function(name, icon){
      return this._workspaceContainer.create(name, icon);
    },
    removeWorkspace: function(idOrWorkspace){
      return this._workspaceContainer.remove(idOrWorkspace);
    },
    setActiveWorkspace: function(idOrWorkspace){
      return this._workspaceContainer.setActive(idOrWorkspace);
    },
    getActiveWorkspace: function(){
      return this._workspaceContainer.getActive();
    },
    getWorkspace: function(idOrWorkspace){
      return this._workspaceContainer.getWorkspace(idOrWorkspace);
    }
  }
});