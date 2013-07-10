qx.Interface.define("wl.be.app.workspace.IWorkspace", {
  members: {
    getMyContainer: function(){
      return "return workspace's container";
    },
    getId: function(){
      return "return id";
    },
    getContainer: function(){
      return "return children's container";
    },
    add: function(ui){
      return "return ui";
    }
  }
});