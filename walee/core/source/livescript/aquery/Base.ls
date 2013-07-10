qx.Class.define \wl.core.aquery.Base,

  statics:
    registry: {}

  extend: qx.core.Object

  include: [wl.core.aquery.MQuery]

  construct: !(name)->
    @base(arguments)

    if @alias

      reg = @get-reg!

      alias = (
        if name
          name.split(\.).reverse!.reduce(((a, b) -> r = {"#b":a}), @alias)
        else
          @alias
      )

      queue = [[alias, void]]

      registers =
        * (r)-> typeof! r.v == \Function
          @_reg-fn reg, _
        * (r)-> typeof! r.v == \Object
          @_reg-obj reg, queue, _
        * (r)-> typeof! r.v == \Array
          @_reg-arr reg, _

      while (r = queue.shift!)
        [obj, path] = r

        refs = Object.keys(obj).map ->
          key = (if path then "#{that}." else "") + it
          v:obj[it], key:key, path:path

        registers.for-each -> refs.filter(it.0).for-each(it.1)

  members:

    _singleOf: (arg, factory) ->
      ref = if @_singleInstanceRef? then that else @_singleInstanceRef = {}
      name = arg[0].factory-ref
      if ref[name] then that else ref[name] = factory.apply(@, arg)

    get-reg: ->
      @self(arguments).registry

    __asFactory: (fn, name, path)->
      fn.__type = \Factory
      fn.__context = @
      fn.__name = name
      fn.__path = path
      fn

    __asQuery: (path)->
      fn = (expr) -> @query-expr(expr, path)
      fn.__type = \Query
      fn.__name = path
      fn

    _reg-fn: (reg, rec) ->
      [key, fn] = (
        if rec.key.slice(-1) == \$
          * rec.key.slice(0, -1),
            -> @_singleOf(arguments, rec.v)
        else
          * rec.key
            rec.v
      )

      if !!reg[key] then @warn "Existing factory alias `#{key}` will be overriden!"
      reg[key] = @__asFactory(fn, key, rec.path)

    _reg-obj: (reg, queue, rec) ->
      key = rec.key
      if !!!reg[key] then reg[key] = @__asQuery(key)
      queue.push [rec.v, key]

    _reg-arr: (reg, rec) ->
      key = rec.key
      if !!!reg[key] then reg[key] = @__asQuery(key)
      rec.v
        .map ->
          if typeof! it.0 == \String
            [[it.0], it.1]
          else
            it
        .for-each (->
          fn = @__asFactory(it.1, it.0.join(","), key)
          it.0.for-each (sub-key) -> reg[key + ".#{sub-key}"] = fn
        ).bind(@)
