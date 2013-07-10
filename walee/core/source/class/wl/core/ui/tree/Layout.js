qx.Class.define('wl.core.ui.tree.Layout', {
  extend: qx.core.Object,
  construct: function(data, width, height, margin, nodeConf){
    var x$;
    this.data = data;
    this.width = width;
    this.height = height;
    this.margin = margin;
    this.nodeConf = nodeConf;
    this.base(arguments);
    x$ = nodeConf;
    if (!(x$.separation != null)) {
      x$.separation = 2;
    }
    if (!(x$.marginX != null)) {
      x$.marginLeft = 5;
    }
    if (!(x$.marginY != null)) {
      x$.marginRight = 5;
    }
    if (!(x$.startLevel != null)) {
      x$.startLevel = 0;
    }
    if (!(x$.minLinkDistance != null)) {
      x$.maxLinkDistance = 270;
    }
    if (!(x$.maxTextWidth != null)) {
      x$.maxTextWidth = 100;
    }
    this.resize(width, height);
  },
  members: {
    resize: function(width, height){
      var ref$, top, right, bottom, left, w, h, x$, separation;
      ref$ = this.margin, top = ref$[0], right = ref$[1], bottom = ref$[2], left = ref$[3];
      w = width - right - left;
      h = height - top - bottom;
      x$ = this.data;
      x$.x0 = h / 2;
      x$.y0 = 0;
      separation = this.nodeConf.separation;
      return this.layout = d3.layout.tree().size([h, w]).separation(function(a, b){
        var that;
        return (a.parent === b.parent
          ? separation
          : separation * 2) / ((that = (that = a.depth) > 0) ? that : 1);
      });
    },
    getNodes: function(){
      var startLevel, nodes;
      startLevel = this.nodeConf.startLevel;
      nodes = this._cachedNodes = this.layout.nodes(this.data).reverse().filter(function(it){
        return it.depth >= startLevel;
      });
      this._fixLinkDistance(nodes, this.nodeConf);
      this._cachedLinks = null;
      return nodes;
    },
    getLinks: function(){
      var that;
      if (that = this._cachedLinks) {
        return that;
      } else if ((that = this._cachedNodes) != null) {
        return this._cachedLinks = this.layout.links(that);
      } else {
        throw new Error("Please Call getNodes before call getLinks!");
      }
    },
    toggleAllChildren: function(recalc){
      var target, allParentNodes;
      target = recalc || (allParentNodes = this._cacheAllParnetNodes) == null ? this.getAllParentNodes() : allParentNodes;
      target.forEach(this.toggleChildren);
      return this.data;
    },
    toggleChildren: function(dParent){
      var x$, that, ref$;
      x$ = dParent;
      ref$ = (that = x$.children)
        ? [null, that]
        : [x$._children, null], x$.children = ref$[0], x$._children = ref$[1];
      return dParent;
    },
    getAllParentNodes: function(recalc){
      var allParentNodes, result, remaining, depth, parents;
      if (recalc || (allParentNodes = this._cachedAllParentNodes) == null) {
        result = [];
        remaining = this.data.children;
        depth = 1;
        while (remaining.length) {
          if ((parents = remaining.filter(fn$)).length) {
            remaining = parents.reduce(fn1$).children;
            result = result.concat(parents);
            ++depth;
          } else {
            remaining = [];
          }
        }
        this._cachedCalcDepth = depth;
        this._cachedAllParentNodes = result;
        return result;
      } else {
        return allParentNodes;
      }
      function fn$(it){
        return !!it.children;
      }
      function fn1$(acc, it){
        return {
          children: acc.children.concat(it.children)
        };
      }
    },
    getCalcDepth: function(recalc){
      var depth;
      if (recalc || (depth = this._cachedCalcDepth) == null) {
        this.getAllParentNodes();
        return this._cachedCalcDepth;
      } else {
        return depth;
      }
    },
    _fixLinkDistance: function(nodes, nodeConf){
      var x$, startLevel, marginLeft, marginRight, maxTextWidth, maxLinkDistance, calcDepth;
      x$ = nodeConf;
      startLevel = x$.startLevel;
      marginLeft = x$.marginLeft;
      marginRight = x$.marginRight;
      maxTextWidth = x$.maxTextWidth;
      maxLinkDistance = x$.maxLinkDistance;
      calcDepth = this.getCalcDepth() - startLevel - 1;
      return nodes.forEach(function(it){
        var y;
        if (it.depth === startLevel) {
          return it.y = marginLeft;
        } else {
          y = (this.width - (marginLeft + marginRight) - calcDepth * maxTextWidth) / calcDepth;
          if (y > maxLinkDistance) {
            y = maxLinkDistance;
          }
          return it.y = (it.depth - startLevel) * y;
        }
      }.bind(this));
    }
  }
});