qx.Class.define \wl.core.ui.tree.Node,

  extend: qx.core.Object

  construct: !(@tree, @container, @elm-name, @class, @duration, @redraw-vis)->
    @base arguments
    @_counts = 0
    @selector = "#{@elm-name}.#{@class}"
    @_currentExpandedNode = {}

  members:

    redraw: (src) ->

      tree = @tree
      container = @container
      nodes = @tree.getNodes!
      currentExpNode = @_currentExpandedNode
      redraw = @redraw-vis

      node = @node = container
        .selectAll @selector
        .data nodes, (-> it.id || (it.id = ++@_counts)).bind(@)

      @node-enter = node.enter!
        .append "svg:#{@elm-name}"
        .attr \class, @class
        .attr \transform, (-> "translate(#{src.y0}, #{src.x0})")
        .on \click, (d)->
          depth = d.depth
          if (exp-node = currentExpNode[depth]) &&
            not (exp-node is d) &&
            !!exp-node.children
            tree.toggleChildren exp-node

          currentExpNode[depth] = d
          tree.toggleChildren d
          redraw d

      @node-update = node
        .transition!
        .duration @duration
        .attr \transform, ( -> "translate(#{it.y}, #{it.x})" )

      @node-exit = node.exit!
        .transition!
        .duration @duration
        .attr \transform, (d)-> "translate(#{src.y}, #{src.x})"
        .remove!

      #Stash the old positions for transition.
      nodes.forEach (->
        it.x0 = it.x
        it.y0 = it.y
      )

      [@node-enter, @node-update, @node-exit]
