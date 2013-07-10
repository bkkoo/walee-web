qx.Class.define "wl.core.err.ErrBase",
  extend: Error
  construct: !(@message)-> this
  members:
    toString: -> @basename + (if this.message then " : #that" else "")
