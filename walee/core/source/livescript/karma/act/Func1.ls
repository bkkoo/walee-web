qx.Class.define \wl.core.karma.act.Func1,

  extend: wl.core.karma.act.Act1

  include: [ wl.core.karma.act.MFunc ]

  construct: !(obj, reactor, filters, converters)->
    @base(arguments, obj, \act, reactor, filters, converters)
