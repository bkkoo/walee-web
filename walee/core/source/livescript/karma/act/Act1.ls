qx.Class.define \wl.core.karma.act.Act1,

  extend: wl.core.karma.act.ActM

  members:

    intercept:!(result, path)->
      @_result = result
      @queueCause(result, path)

    proceed:!(result, path)->
      @base(arguments, @_result, path)
      @_freezeInterception!

    react: !(result, cause, path) ->
      @base(arguments, result, cause, path)
      @_freezeReaction!

    queueCause: !(result, path) ->
      @_incidences.length && @_reactor.queueCause(@, result, path)
      @_freezeQueueCause!

    _freezeReaction: !->
      @_states.push aop.around(@, 'react', -> )

    _freezeQueueCause: ->
      @_states.push aop.around(@, 'queueCause', -> )

    _freezeInterception: !->
      @_states.push aop.around(@, 'intercept', -> )
