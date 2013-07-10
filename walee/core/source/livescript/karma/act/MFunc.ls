qx.Mixin.define \wl.core.karma.act.MFunc,
  members:
    _init: (obj) ->
      obj
        ..act = (...args) -> ..apply(@, args)
        @_onReaction = ..act
      @observe!
