qx.Class.define('wl.core.ui.tree.Rect', {
  extend: qx.core.Object,
  construct: function($class, color, colorToggle, margin){
    this['class'] = $class;
    this.color = color;
    this.colorToggle = colorToggle;
    this.margin = margin;
    this.base(arguments);
    this.selector = "rect." + this['class'];
  },
  members: {
    redraw: function(enter, update, exit){
      var ref$, top, right, bottom, left, selector, color, colorToggle;
      ref$ = this.margin, top = ref$[0], right = ref$[1], bottom = ref$[2], left = ref$[3];
      selector = this.selector;
      color = this.color;
      colorToggle = this.colorToggle;
      enter.insert('svg:rect', 'text.node').attr('class', this['class']).attr('rx', 3).attr('ry', 3).attr('width', 1e-6).attr('height', 1e-6).style('fill', function(d){
        if (d.children) {
          return color;
        } else {
          return colorToggle;
        }
      });
      update.select(selector).attr('width', function(d){
        return d.textBBox.width + right + left;
      }).attr('height', function(d){
        return d.textBBox.height + top + bottom;
      }).style('fill', function(d){
        if (d._children) {
          return color;
        } else {
          return colorToggle;
        }
      }).attr('y', function(d){
        return d.textBBox.y - top;
      }).attr('x', function(d){
        return d.textBBox.x - left;
      });
      return exit.select(selector).attr('width', 1e-6).attr('height', 1e-6);
    }
  }
});