qx.Class.define \wl.core.ui.tree.Text,

  extend: qx.core.Object

  construct: !(@class)->
    @base arguments
    @selector = "text.#{@class}"

  members:

    redraw: (enter, update, exit) ->
      elm-name = \text
      selector = @selector
      
      enter
        .append "svg:#elm-name"
        .attr \class, @class
        .attr \x, 4
        .attr \dy, \.35em
        .text (d)-> d.name
        .style \fill-opacity, 1e-6

      update
        .select selector
        .style \fill-opacity, (d)->
          d.text-b-box = @get-b-box!
          1

      exit
        .select selector
        .style \fill-opacity, 1e-6
