qx.Class.define \wl.core.ui.tree.Rect,

  extend: qx.core.Object

  construct: !(@class, @color, @color-toggle, @margin)->
    @base arguments
    @selector = "rect.#{@class}"

  members:

    redraw: (enter, update, exit) ->

      [ top, right, bottom, left ] = @margin

      selector = @selector
      color = @color
      color-toggle = @color-toggle

      enter
        .insert \svg:rect, \text.node
        .attr \class, @class
        .attr \rx, 3
        .attr \ry, 3
        .attr \width, 1e-6
        .attr \height, 1e-6
        .style \fill, (d)-> if d.children then color else color-toggle


      update
        .select selector
        .attr \width, (d)-> d.text-b-box.width + right + left
        .attr \height, (d)-> d.text-b-box.height + top + bottom
        .style \fill, (d)-> if d._children then color else color-toggle
        .attr \y, (d)-> d.text-b-box.y - top
        .attr \x, (d)-> d.text-b-box.x - left

      exit
        .select selector
        .attr \width, 1e-6
        .attr \height, 1e-6
