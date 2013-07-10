qx.Mixin.define('wl.core.aquery.MQuery', {
  members: {
    aquery: function(){
      var reg, that, q;
      reg = (that = this._objRefReg) != null
        ? that
        : this._objRefReg = {};
      q = new wl.core.aquery.Query(reg);
      return q.query.bind(q);
    }
  }
});