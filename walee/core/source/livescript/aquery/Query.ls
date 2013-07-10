qx.Class.define \wl.core.aquery.Query,

  extend: qx.core.Object

  construct:!(registry)->
    @base(arguments)
    @_last-qry = void
    @_last-factory = void
    @_use-attrs = {}

    if registry && typeof! registry != \Object
      @error "Wrong type of registry for object!"

    @_obj-ref-reg = registry

  members:

    get-factory-reg: ->
      wl.core.aquery.Base.registry

    query: (expr, path) ->
      switch typeof! expr
        |\String   =>
          switch (prefix = expr.0)
            |\^ =>
              @query-expr(expr, path)
            |\? =>
              @[\?](expr.slice(1))
            |_ =>
              if @_last-qry?
                that(expr)
              else
                @error("No last query for relative reference `#{expr}`")

        |\Object   =>
          @_use-attrs = @_empty-to-void(expr)

    query-expr: (expr, path) ->
      (if @[expr.0]? then that else @[\+]).call(@, expr, path)

    \^ : (_ref)->
      [ref0, def-attrs-flag] = _ref.split(\:)
      ref = ref0.slice(1)
      reg = @get-factory-reg!
      
      if (fn = reg[ref])

        switch fn.__type
          |\Query => @_gen-last-qry(fn)
          |\Factory =>
            q-info = @_gen-q-info(ref, fn)
            @_gen-last-qry(reg[q-info.path])
            @_gen-last-factory(fn, q-info, def-attrs-flag)

      else
        @error("Reference `#{ref}` is not found!")
      
    \+ : (ref, path) ->
      @[\^]( if path then "^#{path}.#{ref}" else "^#{ref}" )
      
    \. : (_ref, path) ->
      dots = (/^\.*/ is _ref).0.length
      new-path = (path.split \.).slice(0, dots)
      ref =  _ref.slice(dots)
      new-ref = if ref == "" then new-path.join(\.) else new-path.concat(ref).join(\.)
      @[\^]("^#{new-ref}")

    \_ : (_ref, path) ->
      ref = _ref.slice(1)

      if ref == ""
        if @_last-factory? then that else @error "No last factory!"
      else
        if @_last-qry? then that(ref) else @error "No last query!"

    \? : (ref)->
      if @_null-void-to-empty(@_obj-ref-reg)
        if that[ref]?
          that
        else if qx.core.Environment.get \qx.debug
          @warn("Ref `#ref` is not in registry")
      else
        @error("Object Reference Registry is not provided!")

    _is-empty:(obj) -> Object.keys(obj).length == 0
    _empty-to-void:(obj) -> if @_is-empty(obj) then void else obj
    _null-void-to-empty:(v) -> ;if v then v else {}
    _map-to-pairs:(obj) -> Object.keys(obj).map -> [it, obj[it]]
    _null-void-to-arr0:(arr) -> if arr === void then [] else arr
    _gen-q-info:(ref, fn) ->
      {path: fn.__path , factory-ref: ref.split(\.).slice(-1).0}

    _merge-attrs:(target, src)->
      @_map-to-pairs(src).for-each ->
        target-v = target[it.0]
        src-v = (
          if typeof! target-v == \Array
            (if typeof! it.1 == \Array then it.1 else [it.1])
              .filter (sv)-> not qx.lang.Array.contains(target-v, sv)
              .concat(target-v)
          else
            it.1
        )
        target[it.0] = src-v

      target

    _gen-obj-attrs:(obj, q-info) ->
      default-attr = if obj.get-user-data then obj.get-user-data(\attrs) else null
      @_empty-to-void(
        [default-attr, @_use-attrs, q-info.attrs]
          .map (-> @_null-void-to-empty(it)).bind(@)
          .map (-> @_serialize-attrs(it)).bind(@)
          .reduce ((a, b) -> @_merge-attrs(a, b)).bind(@)
      )
        q-info.attrs = ..

    _gen-last-qry:(fn)->
      @_last-qry = ((expr)-> fn.call(@, expr)).bind(@)

    _gen-last-factory:(fn, q-info, def-attrs-flag) ->
      factory = ((...args)->
        obj = fn.apply(fn.__context, [q-info].concat(args))
        if (attrs = @_gen-obj-attrs(obj, q-info))
          if obj.set-user-data then obj.set-user-data(\attrs, attrs)
          @_register-obj-ref(obj, attrs.id, attrs.grp)

        obj
      ).bind(@)

      @_last-factory = (
        if def-attrs-flag == "" then
          (attrs)->
            q-info.attrs = attrs
            factory
        else
          factory
      )

    _serialize-attrs:(attrs) ->
      if typeof! attrs == \String
        chk = (flag, fn)-> if (a = attrs.split(flag)).length > 1 then fn(a)
        if chk(\., -> {id: it.1 , grp: [it.0]}) then that
        else if chk(\|, -> grp:it) then that
        else {id: attrs}
      else
        @_map-to-pairs(attrs).for-each ->
          if typeof! it.1 == \String
            #seperator to array
            it.1.split(\|)
              attrs[it.0] = if ..length > 1 then .. else [it.1]

        attrs
          
    _register-obj-ref: (obj, id, grp) ->
      reg = @_obj-ref-reg
      if reg && (id || grp)
        grp-keys = (
          (@_null-void-to-arr0(grp).map -> ".#it")
            ..for-each (-> (reg[it] = @_null-void-to-arr0(reg[it])).push(obj)).bind(@)
            ..
        )

      if id

        chk1 = -> if !!reg[it] then @error("Ref for `#it` is already exists!") else true
        chk2 = -> if !!reg[it] then false else true
        register = -> reg[it] = obj

        grp-keys
          .map -> "#{it}.#id"
          .for-each -> chk1(it) && register(it)

        (if grp-keys.length then chk2 else chk1)(id) && register(id)
