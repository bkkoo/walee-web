qx.Class.define('wl.core.ui.tree.Node', {
  extend: qx.core.Object,
  construct: function(tree, container, elmName, $class, duration, redrawVis){
    this.tree = tree;
    this.container = container;
    this.elmName = elmName;
    this['class'] = $class;
    this.duration = duration;
    this.redrawVis = redrawVis;
    this.base(arguments);
    this._counts = 0;
    this.selector = this.elmName + "." + this['class'];
    this._currentExpandedNode = {};
  },
  members: {
    redraw: function(src){
      var tree, container, nodes, currentExpNode, redraw, node;
      tree = this.tree;
      container = this.container;
      nodes = this.tree.getNodes();
      currentExpNode = this._currentExpandedNode;
      redraw = this.redrawVis;
      node = this.node = container.selectAll(this.selector).data(nodes, function(it){
        return it.id || (it.id = ++this._counts);
      }.bind(this));
      this.nodeEnter = node.enter().append("svg:" + this.elmName).attr('class', this['class']).attr('transform', function(){
        return "translate(" + src.y0 + ", " + src.x0 + ")";
      }).on('click', function(d){
        var depth, expNode;
        depth = d.depth;
        if ((expNode = currentExpNode[depth]) && !(expNode === d) && !!expNode.children) {
          tree.toggleChildren(expNode);
        }
        currentExpNode[depth] = d;
        tree.toggleChildren(d);
        return redraw(d);
      });
      this.nodeUpdate = node.transition().duration(this.duration).attr('transform', function(it){
        return "translate(" + it.y + ", " + it.x + ")";
      });
      this.nodeExit = node.exit().transition().duration(this.duration).attr('transform', function(d){
        return "translate(" + src.y + ", " + src.x + ")";
      }).remove();
      nodes.forEach(function(it){
        it.x0 = it.x;
        return it.y0 = it.y;
      });
      return [this.nodeEnter, this.nodeUpdate, this.nodeExit];
    }
  }
});