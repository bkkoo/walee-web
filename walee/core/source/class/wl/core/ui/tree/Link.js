qx.Class.define('wl.core.ui.tree.Link', {
  extend: qx.core.Object,
  construct: function(tree, container, $class, duration){
    this.tree = tree;
    this.container = container;
    this['class'] = $class;
    this.duration = duration;
    this.base(arguments);
    this.diagonal = d3.svg.diagonal().projection(function(d){
      var that;
      return [d.y + ((that = d.textBBox) ? that.width - 10 : 0), d.x];
    });
    this.selector = "path." + this['class'];
  },
  members: {
    redraw: function(src){
      var diagonal, duration, links, selector, link;
      diagonal = this.diagonal;
      duration = this.duration;
      links = this.tree.getLinks();
      selector = this.selector;
      link = this.container.selectAll(selector).data(links, function(it){
        return it.target.id;
      });
      link.enter().insert('svg:path', 'g').attr('class', this['class']).attr('d', function(){
        var o;
        o = {
          x: src.x0,
          y: src.y0
        };
        return diagonal({
          source: o,
          target: o
        });
      }).transition().duration(duration).attr('d', diagonal).attr('fill', 'red');
      link.transition().duration(duration).attr('d', diagonal);
      return link.exit().transition().duration(duration).attr('d', function(){
        var o;
        o = {
          x: src.x,
          y: src.y
        };
        return diagonal({
          source: o,
          target: o
        });
      }).remove();
    }
  }
});