qx.Class.define "wl.core.karma.reactor.Reactor",

  extend: qx.core.Object

  construct: !->
    @_causes = []
    @_actions = []

  destruct: !->
    @_causes = @_actions = null

  members:

    recordAction: (action)->
      @_actions
        ..filter( -> it == action).length == 0 && ..push action

    queueCause: !(action, result, path, isLast=false)->
      @recordAction(action)
      {action: action, result: result, path: path}
        if isLast then @_causes.push .. else @_causes.unshift ..

    _proceed: !->
      @_causes
        while (cause = ..shift!)
          cause
            ..action.proceed(..result, ..path)

      @_reset!

    _reset: !->
      @_actions.forEach -> it.reset!
