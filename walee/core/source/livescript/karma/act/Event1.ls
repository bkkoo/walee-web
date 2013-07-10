qx.Class.define \wl.core.karma.act.Event1,

  extend: wl.core.karma.act.Act1

  construct: !(obj, event, fireEvent, reactor, filters, converters) ->
    @_onReaction = fireEvent
    listener = @_listener = {notify: (v) -> v}
    @base(arguments, @_listener, \notify , reactor, filters, converters)
    obj.addListener(event, (...args) -> listener.notify(args))
