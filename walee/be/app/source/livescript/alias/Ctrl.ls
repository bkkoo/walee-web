qx.Class.define \wl.be.app.alias.Ctrl,

  extend: wl.core.aquery.Base

  type: \singleton

  construct: !->
    @base(arguments, \ctrl)
    @_singleInstanceReg = {}

  members:

    _instanceOf: (name, factory) -> if @_singleInstanceReg[name] then that else @_singleInstanceReg[name] = factory!

    alias:
      security : (q) -> @_instanceOf(q.factory-ref, -> new wl.be.app.ctrl.Security)
      slotManager : (q) -> @_instanceOf(q.factory-ref, -> new wl.be.app.ctrl.SlotManager)
