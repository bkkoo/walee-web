qx.Class.define "wl.core.err.ErrNoClazzFunc",
  extend: wl.core.err.ErrBase
  construct: !->
    @message = "clazz function using for get class is not defined. see: wl.core.Object"
