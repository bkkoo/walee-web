qx.Class.define \wl.core.karma.act.FuncM,

  extend: wl.core.karma.act.ActM
  
  include: [ wl.core.karma.act.MFunc ]

  construct: !(obj, reactor, filters, converters)->
    @base(arguments, obj, \act, reactor, filters, converters)
