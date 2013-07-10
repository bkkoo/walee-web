qx.Class.define \wl.core.karma.reactor.Async,

  extend: wl.core.karma.reactor.Reactor

  type: 'singleton'

  construct: !->
    @base(arguments)
    @_waiting!

  members:

    _waiting: ->
      @_schedulerRemover = aop.afterReturning(@, 'queueCause', @_schedule.bind(@))

    _schedule: !->
      @_schedulerRemover.remove!

      proceed = @_proceed.bind(@)
      waiting = @_waiting.bind(@)

      qx.util.DeferredCallManager.getInstance!.schedule(
        new qx.util.DeferredCall (->
          proceed!
          waiting!
        )
      )
