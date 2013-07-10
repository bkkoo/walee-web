qx.Class.define('wl.be.app.view.Neural', {
  extend: qx.ui.embed.Html,
  include: [wl.be.app.MPack, wl.core.objres.MRes, wl.core.view.MUiFor],
  construct: function(dataUri, minWidth, minHeight, margin, svgMargin, elmId){
    var this$ = this;
    this.minWidth = minWidth != null ? minWidth : 800;
    this.minHeight = minHeight != null ? minHeight : 400;
    this.margin = margin != null
      ? margin
      : [10, 10, 10, 10];
    this.svgMargin = svgMargin != null
      ? svgMargin
      : [15, 15];
    this.elmId = elmId != null ? elmId : 'neural';
    this.base(arguments, "<div id=" + this.elmId + "></div>");
    this.addListenerOnce('appear', function(){
      return d3.json(dataUri, function(it){
        return this$._compose(it);
      });
    });
    this.redrawingQ = 0;
    this.setOverflowX('auto');
    this.setOverflowY('auto');
    this.treeDimension = {};
  },
  members: {
    uiPaths: ['d3.tree'],
    _compose: function(data){
      var x$, w, h, duration;
      this.svg = d3.select("#" + this.elmId).append('svg:svg');
      this.vis = this.svg.append('svg:g').attr('transform', "translate(" + this.margin[3] + ", " + this.margin[0] + ")");
      x$ = this.getBounds();
      w = x$.width;
      h = x$.height;
      this._resizeSvg(w, h);
      this._resizeTree(w, h);
      this.tree = this.ui('tree-layout', data, w, h, this.margin, {
        startLevel: 1
      });
      this.tree.toggleAllChildren();
      duration = d3.event && d3.event.altKey ? 5000 : 500;
      this.node = this.ui('tree-node', this.tree, this.vis, 'g', 'node', duration, bind$(this, '_redraw'));
      this.link = this.ui('tree-node-link', this.tree, this.vis, 'link', duration);
      this.text = this.ui('tree-node-text', 'node');
      this.rect = this.ui('tree-node-rect', 'node', 'lightsteelblue', '#fff', [1, 4, 3, 4]);
      this._redraw(this.tree.data);
      return this.addListener('resize', bind$(this, '_scheduleRedrawing'));
    },
    _redraw: function(src){
      var nodeStates;
      nodeStates = this.node.redraw(src);
      this.text.redraw.apply(this.text, nodeStates);
      this.rect.redraw.apply(this.rect, nodeStates);
      return this.link.redraw(src);
    },
    _redrawOnResize: function(bounds){
      var w, h;
      this.redrawingQ--;
      if (this.redrawingQ === 0 && (w = bounds.width) >= this.minWidth && (h = bounds.height) >= this.minHeight && (w !== this.treeDimension.width || h !== this.treeDimension.height)) {
        this._resizeSvg(w, h);
        this._resizeTree(w, h);
        return this._redraw(this.tree.data);
      }
    },
    _scheduleRedrawing: function(event){
      var bounds;
      bounds = event.getData();
      this.redrawingQ++;
      return qx.util.TimerManager.getInstance().start(function(){
        return this._redrawOnResize(bounds);
      }, null, this, null, 1500);
    },
    _resizeSvg: function(width, height){
      var ref$, marginW, marginH;
      ref$ = this.svgMargin, marginW = ref$[0], marginH = ref$[1];
      return this.svg.attr('width', width - marginW).attr('height', height - marginH);
    },
    _resizeTree: function(width, height){
      var x$;
      x$ = this.treeDimension;
      if (x$.width != null) {
        this.tree.resize(width, height);
      }
      x$.width = width;
      x$.height = height;
      return x$;
    }
  }
});
function bind$(obj, key, target){
  return function(){ return (target || obj)[key].apply(obj, arguments) };
}