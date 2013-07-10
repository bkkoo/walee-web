qx.Class.define \wl.core.ui.tree.Link,

  extend: qx.core.Object

  construct: !(@tree, @container, @class, @duration)->
    @base arguments
    @diagonal = d3.svg.diagonal!
      .projection (d)->
        [d.y + (if d.text-b-box then that.width - 10 else 0), d.x]
    @selector = "path.#{@class}"

  members:

    redraw: (src)->
      diagonal = @diagonal
      duration = @duration
      links = @tree.getLinks!
      selector = @selector

      link = @container
        .selectAll selector
        .data links, (-> it.target.id)

      link
        .enter!
        .insert \svg:path, \g
        .attr \class, @class
        .attr \d, (-> o = {x: src.x0, y: src.y0}; diagonal {source: o, target: o})
      .transition!
        .duration duration
        .attr \d, diagonal
        .attr \fill, \red

      link
        .transition!
        .duration duration
        .attr \d, diagonal

      link.exit!
        .transition!
        .duration duration
        .attr \d, (-> o = {x: src.x, y: src.y}; diagonal {source: o, target: o} )
        .remove!
