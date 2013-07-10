qx.Class.define('wl.core.ui.tree.Text', {
  extend: qx.core.Object,
  construct: function($class){
    this['class'] = $class;
    this.base(arguments);
    this.selector = "text." + this['class'];
  },
  members: {
    redraw: function(enter, update, exit){
      var elmName, selector;
      elmName = 'text';
      selector = this.selector;
      enter.append("svg:" + elmName).attr('class', this['class']).attr('x', 4).attr('dy', '.35em').text(function(d){
        return d.name;
      }).style('fill-opacity', 1e-6);
      update.select(selector).style('fill-opacity', function(d){
        d.textBBox = this.getBBox();
        return 1;
      });
      return exit.select(selector).style('fill-opacity', 1e-6);
    }
  }
});