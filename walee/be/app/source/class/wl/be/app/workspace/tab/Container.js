var toString$ = {}.toString;
qx.Class.define("wl.be.app.workspace.tab.Container", {
  extend: qx.ui.tabview.TabView,
  include: wl.core.view.MView,
  implement: wl.be.app.workspace.IContainer,
  construct: function(barPosition){
    this.base(arguments, barPosition);
    this.workspaces = [];
  },
  members: {
    create: function(name, icon){
      var workspace;
      workspace = new wl.be.app.workspace.tab.Workspace(name, icon, this.workspaces.length, this);
      this.workspaces.push(workspace);
      this.add(workspace);
      return workspace;
    },
    remove: function(idOrWorkspace){
      var that;
      if (that = this.getWorkspace(idOrWorkspace)) {
        this.workspaces = this.workspaces.filter(function(it){
          return it !== that;
        });
        this.remove(that);
        return that;
      }
    },
    setActive: function(idOrWorkspace){
      var that;
      if (that = this.getWorkspace(idOrWorkspace)) {
        this.setSelection([that]);
        return that;
      }
    },
    getActive: function(){
      var selections;
      selections = this.getSelection();
      if (selections.length) {
        return selections[0];
      }
    },
    getWorkspace: function(idOrWorkspace){
      var that;
      if (that = toString$.call(idOrWorkspace).slice(8, -1) === 'Number' && (that = this.workspaces[idOrWorkspace])) {
        return that;
      } else {
        if (that = qx.Class.hasInterface(qx.Class.getByName(idOrWorkspace.classname), wl.be.app.workspace.IWorkspace)) {
          if (that = in$(that = idOrWorkspace, this.workspaces)) {
            return that;
          } else {
            throw wl.be.app.workspace.ErrWorkspaceNotExist("WorkSpace `" + idOrWorkspace + "` pass as an argument is not exist!");
          }
        } else {
          throw wl.core.err.ErrWrongArg("Wrong argument! require id or object that implements IWorkspace Interface");
        }
      }
    }
  }
});
function in$(x, arr){
  var i = -1, l = arr.length >>> 0;
  while (++i < l) if (x === arr[i] && i in arr) return true;
  return false;
}