AsyncReactor = wl.core.karma.reactor.Async.getInstance!
qx.Class.define \wl.core.karma.act.ActM,

  extend: qx.core.Object

  construct:!(@_obj, @_member, @_reactor=AsyncReactor, filters, converters) ->

    @base(arguments)
    @_incidences = []
    @_states = []
    @_observerRemovers = []
    @setFilters(filters)
    @setConverters(converters)
    @_init(@_obj, @_member, @_reactor, @_filters, @_converters)

  destruct: !->
    @reset!
    @unobserve!
    @_obj = @_member = @_filters = @_converters = @_reactor = null
    @_incidences = @_states = @_obseverRemovers = null

  members:

    _init: (obj, member, reactor, filters, converters)->
      fn = obj[member]
      @_onReaction = (v)-> fn.call(obj, v)
      @observe!

    effect: (incidence) ->
      incidence
        not @isMyIncidence(..) && @_incidences.push ..
        ..

    uneffect: (incidence) ->
      @_incidences = @_incidences.filter( -> it != incidence)
      incidence

    proceed:!(result, path)->
      me = @
      @_incidences.forEach -> it.react(result, me, path)
          
    react:!(result, cause, path)->
      if @_isNotCyclicRef(path) && @passedFilters(result, cause, path)
        @_onReaction(@convert result)
          @intercept .. , path.concat(@)
      else
        @_recordAction!

    observe: !->
      @unobserve!
      @_observerRemovers.push aop.afterReturning(@_obj, @_member, @_onAction.bind(@))

    passedFilters: (result, cause, path)->
      me = @
      @_filters.reduce ((p, f)-> p==true && f(result, cause, path , me)==true), true

    isMyIncidence: (incidence) ->
      @_incidences.filter( -> it == incidence).length > 0

    intercept: !(result, path)->
      @_incidences.length && @_reactor.queueCause(@, result, path)

    unobserve: !->
      while (remover = @_observerRemovers.shift!) then remover.remove!

    reset:!->
      while (remover = @_states.shift!) then remover.remove!

    _isNotCyclicRef: (path) ->
      me = @
      path.filter(-> it == me).length == 0

    _recordAction: ->
      @_reactor.recordAction(@)

    _onAction: (result) ->
      @passedFilters(result, @, []) && @intercept(@convert(result), [@])

    _onReaction:(result) ->
      throw new Error("please implement `_onReaction`!")

    convert: (value) -> @_converters.reduce ((v, c)-> c(v)), value
    getObj: -> @_obj
    getMember: -> @_member
    getConverters: -> @_converters
    setConverters: !(converters) -> @_converters = if converters? then that else []
    getFilters: -> @_fitlers
    setFilters: !(filters) -> @_filters = if filters? then that else []
    getResult: -> @_result
    getReactor: -> @_reactor
    getIncidences: -> @_incidences
