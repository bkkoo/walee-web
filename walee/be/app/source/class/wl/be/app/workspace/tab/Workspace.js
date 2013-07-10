qx.Class.define("wl.be.app.workspace.tab.Workspace", {
  extend: qx.ui.tabview.Page,
  implement: wl.be.app.workspace.IWorkspace,
  construct: function(name, icon, id, container){
    this.base(arguments, name, icon);
    this._id = id;
    this._name = name;
    this._myContainer = container;
  },
  members: {
    getMyContainer: function(){
      return this._myContainer;
    },
    getId: function(){
      return this._id;
    },
    getContainer: function(){
      return this;
    }
  }
});