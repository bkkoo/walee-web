qx.Class.define \wl.be.app.view.Neural,

  extend: qx.ui.embed.Html

  include:
    wl.be.app.MPack
    wl.core.objres.MRes
    wl.core.view.MUiFor

  construct: !(dataUri, @min-width=800, @min-height=400, @margin=[10,10,10,10], @svg-margin=[15,15], @elmId=\neural) ->
    @base arguments "<div id=#{@elmId}></div>"
    @addListenerOnce \appear, (~>
      d3.json dataUri, ( ~> @_compose it )
    )
    @redrawingQ = 0
    @setOverflowX(\auto)
    @setOverflowY(\auto)
    @tree-dimension = {}
  
  members:

    uiPaths: [\d3.tree]

    _compose: (data) ->

      @svg = d3
        .select "##{@elmId}"
        .append \svg:svg

      @vis = @svg
        .append \svg:g
        .attr \transform, "translate(#{@margin.3}, #{@margin.0})"

      with @getBounds!
        w = ..width
        h = ..height

      @_resizeSvg(w, h)
      @_resizeTree(w, h)

      @tree = @ui \tree-layout, data, w, h, @margin, { start-level: 1 }
      @tree.toggleAllChildren!

      duration = if d3.event && d3.event.altKey then 5000 else 500

      @node = @ui \tree-node, @tree, @vis, \g, \node, duration, @~_redraw
      @link = @ui \tree-node-link, @tree, @vis, \link, duration
      @text = @ui \tree-node-text, \node
      @rect = @ui \tree-node-rect, \node, \lightsteelblue, \#fff, [1, 4, 3, 4]

      @_redraw(@tree.data)
      @addListener \resize, @~_scheduleRedrawing

    _redraw: (src)->
      node-states =  @node.redraw src
      @text.redraw.apply(@text, node-states)
      @rect.redraw.apply(@rect, node-states)
      @link.redraw src

    _redrawOnResize: (bounds) ->
      @redrawingQ--

      if @redrawingQ == 0 &&
        (w = bounds.width) >= @min-width &&
        (h = bounds.height) >= @min-height &&
        (w != @tree-dimension.width || h != @tree-dimension.height)

        @_resizeSvg w, h
        @_resizeTree w, h
        @_redraw(@tree.data)

    _scheduleRedrawing: (event) ->
        bounds = event.get-data!
        @redrawingQ++
        qx.util.TimerManager
          .getInstance!
          .start (-> @_redrawOnResize bounds), null, @, null, 1500

    _resizeSvg: (width, height) ->
      [margin-w, margin-h] = @svg-margin
      @svg
        .attr \width, width - margin-w
        .attr \height, height - margin-h
    
    _resizeTree: (width, height) ->
      with @tree-dimension
        if ..width?
          @tree.resize width, height

        ..width = width
        ..height = height

