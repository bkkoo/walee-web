qx.Class.define \wl.core.ui.tree.Layout,

  extend: qx.core.Object

  construct: !(@data, @width, @height, @margin, @node-conf) ->
    @base arguments
    # set node's conf default values
    with node-conf
      ..separation = 2 if not (..separation?)
      ..margin-left = 5 if not (..margin-x?)
      ..margin-right = 5 if not (..margin-y?)
      ..start-level = 0 if not (..start-level?)
      ..max-link-distance = 270 if not (..min-link-distance?)
      ..max-text-width = 100 if not (..max-text-width?)

    @resize(width, height)

  members:

    resize: (width, height) ->
      [top, right, bottom, left] = @margin
      w = width - right - left
      h = height - top - bottom

      with @data
        ..x0 = h / 2
        ..y0 = 0

      separation = @node-conf.separation

      @layout = d3.layout.tree!
        .size [h, w]
        .separation (a, b) ->
          ( if a.parent == b.parent then separation else separation * 2 ) /
          ( if (that = a.depth) > 0 then that else 1 )

    getNodes: ->
      start-level = @node-conf.start-level
      nodes = @_cached-nodes = @layout.nodes(@data).reverse!.filter(-> it.depth >= start-level)
      @_fixLinkDistance(nodes, @node-conf)
      @_cached-links = null
      nodes

    getLinks: ->
      if @_cached-links
        that
      else if @_cached-nodes?
        @_cached-links = @layout.links that
      else
        throw new Error "Please Call getNodes before call getLinks!"

    toggleAllChildren: (recalc) ->
      target = (
        if recalc || not (all-parent-nodes = @_cache-all-parnet-nodes)?
          @getAllParentNodes!
        else
          all-parent-nodes
      )
      target.forEach @toggleChildren
      @data

    toggleChildren: (d-parent) ->
      with d-parent
        [..children, .._children] = if ..children then [null, that] else [.._children, null]

      d-parent

    getAllParentNodes: (recalc) ->
      if recalc || not (all-parent-nodes = @_cached-all-parent-nodes)?
        result = []
        remaining = @data.children
        depth = 1

        while remaining.length
          if (parents = remaining.filter (-> !!it.children)).length
            remaining = (parents.reduce (acc, it)-> { children: acc.children ++ it.children }).children
            result ++= parents
            ++depth
          else
            remaining = []

        @_cached-calc-depth = depth
        @_cached-all-parent-nodes = result

        result

      else
        all-parent-nodes

    getCalcDepth: (recalc) ->
      if recalc || not (depth = @_cached-calc-depth)?
        @getAllParentNodes!
        @_cached-calc-depth
      else
        depth

    _fixLinkDistance:(nodes, node-conf)->
      with node-conf
        start-level = ..start-level
        margin-left = ..margin-left
        margin-right = ..margin-right
        max-text-width = ..max-text-width
        max-link-distance = ..max-link-distance

      calc-depth = @getCalcDepth! - start-level - 1

      nodes.forEach (->
        if it.depth == start-level
          it.y = margin-left
        else
          y = ( @width - (margin-left + margin-right) - ( calc-depth * max-text-width ) ) / calc-depth
          y = max-link-distance if y > max-link-distance
          it.y = (it.depth - start-level) * y
      ).bind(@)
