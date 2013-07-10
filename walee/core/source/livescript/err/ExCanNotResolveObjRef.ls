qx.Class.define "wl.core.err.ExCanNotResolveObjRef",
  extend: wl.core.err.ErrBase
  construct: !(name, paths, packClazz) ->
    @message = "Can't resolve object reference `#name` on path `#paths` in pack `#packClazz`"
