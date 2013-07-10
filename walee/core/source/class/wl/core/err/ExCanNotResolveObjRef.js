qx.Class.define("wl.core.err.ExCanNotResolveObjRef", {
  extend: wl.core.err.ErrBase,
  construct: function(name, paths, packClazz){
    this.message = "Can't resolve object reference `" + name + "` on path `" + paths + "` in pack `" + packClazz + "`";
  }
});