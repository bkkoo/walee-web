qx.$$packageData['16']={"locales":{},"resources":{"widgetbrowser/people.json":"widgetbrowser"},"translations":{"en":{}}};
qx.Part.$$notifyLoad("16", function() {
(function(){var g="List",f="List (virtual)",e="widgetbrowser/people.json",d="widgetbrowser.pages.List",c="List (virtual, grouped)";qx.Class.define(d,{extend:widgetbrowser.pages.AbstractPage,construct:function(){widgetbrowser.pages.AbstractPage.call(this);this.__nn=new qx.ui.container.Composite(new qx.ui.layout.Grid(10));this.__QH=qx.util.ResourceManager.getInstance().toUri(e);this.add(this.__nn);this.initWidgets();},members:{__nn:null,__QH:null,initWidgets:function(){var h=this._widgets;var l=new qx.ui.basic.Label(g);this.__nn.add(l,{row:0,column:0});var j=this.__QI();this.__nn.add(j,{row:1,column:0});h.push(j);l=new qx.ui.basic.Label(f);this.__nn.add(l,{row:0,column:1});var i=this.__QJ();this.__nn.add(i,{row:1,column:1});h.push(i);l=new qx.ui.basic.Label(c);this.__nn.add(l,{row:0,column:2});var k=this.__QK();this.__nn.add(k,{row:1,column:2});h.push(k);},__QI:function(){var n=new qx.ui.form.List();n.setWidth(150);var m=new qx.io.request.Xhr(this.__QH);m.setParser("json");m.addListener("success",function(){var o=m.getResponse().people;o.forEach(function(p){var q=new qx.ui.form.ListItem(""+p.lastname+", "+p.firstname);q.setHeight(25);n.add(q);});});m.send();return n;},__QJ:function(){var r=new qx.ui.list.List().set({height:280,width:150,labelPath:"firstname",labelOptions:{converter:function(s,t){return t?t.getLastname()+", "+s:"no model...";}}});this.__QL(r);return r;},__QK:function(){var u=this.__QJ();var v={sorter:function(a,b){a=a.getLastname();b=b.getLastname();return a>b?1:a<b?-1:0;},group:function(w){return w.getLastname().charAt(0).toUpperCase();}};u.setDelegate(v);return u;},__QL:function(x){var y=new qx.data.store.Json(this.__QH);y.bind("model.people",x,"model");}}});})();
});