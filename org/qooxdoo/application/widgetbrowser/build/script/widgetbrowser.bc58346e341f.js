qx.$$packageData['1']={"locales":{},"resources":{},"translations":{"C":{},"en":{}}};
qx.Part.$$notifyLoad("1", function() {
(function(){var f="ColorSelector",e="ColorPopup",d="Open Color Popup",c="widgetbrowser.pages.Control",b="DateChooser",a="execute";qx.Class.define(c,{extend:widgetbrowser.pages.AbstractPage,construct:function(){widgetbrowser.pages.AbstractPage.call(this);this.__Qw=new qx.ui.container.Composite(new qx.ui.layout.VBox(20));this.add(this.__Qw,{top:0});this.initWidgets();},members:{__Qw:null,initWidgets:function(){var l=this._widgets=new qx.type.Array();var j;j=new qx.ui.basic.Label(f);var k=new qx.ui.control.ColorSelector();l.push(k);this.__Qw.add(j);this.__Qw.add(k);j=new qx.ui.basic.Label(e);var g=new qx.ui.control.ColorPopup();g.exclude();var h=new qx.ui.form.Button(d).set({maxWidth:150});l.push(h);this.__Qw.add(j);this.__Qw.add(h);h.addListener(a,function(){g.placeToWidget(h);g.show();});var i=new qx.ui.control.DateChooser().set({maxWidth:240});j=new qx.ui.basic.Label(b);l.push(i);this.__Qw.add(j);this.__Qw.add(i);}}});})();(function(){var a="qx.ui.layout.Basic";qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(b,c){var g=this._getLayoutChildren();var d,f,e,h,top;for(var i=0,l=g.length;i<l;i++){d=g[i];f=d.getSizeHint();e=d.getLayoutProperties();h=(e.left||0)+d.getMarginLeft();top=(e.top||0)+d.getMarginTop();d.renderLayout(h,top,f.width,f.height);};},_computeSizeHint:function(){var p=this._getLayoutChildren();var m,r,n;var q=0,o=0;var j,k;for(var i=0,l=p.length;i<l;i++){m=p[i];r=m.getSizeHint();n=m.getLayoutProperties();j=r.width+(n.left||0)+m.getMarginLeft()+m.getMarginRight();k=r.height+(n.top||0)+m.getMarginTop()+m.getMarginBottom();if(j>q){q=j;};if(k>o){o=k;};};return {width:q,height:o};}}});})();(function(){var m="mousedown",l="teal",k="maroon",h="qx.ui.control.ColorPopup",g="#666",f="changeValue",d="#333",c="#000",b="yellow",a="changeGreen",X="colorpopup",W="_applyValue",V="__Gc",U="blue",T="changeRed",S="field#",R="#CCC",Q="Color Selector",P="changeVisibility",O="recent",t="changeBlue",u="mouseover",r="Cancel",s="#FFF",p="right",q="Open ColorSelector",n="mouseout",o="#999",v="Automatic",w="Basic Colors",D="Preview (Old/New)",B="visible",H="Recent Colors",F="OK",K="field",J="green",y="__Gd",N="red",M="preview-pane",L="selector-button",x="colorselector-cancelbutton",z="auto-button",A="colorselector-okbutton",C="Number",E="execute",G="selected-preview",I="current-preview";qx.Class.define(h,{extend:qx.ui.popup.Popup,implement:[qx.ui.form.IColorForm],construct:function(){qx.ui.popup.Popup.call(this);this.setLayout(new qx.ui.layout.VBox(5));this._createChildControl(z);this._createBoxes();this._createChildControl(M);this._createChildControl(L);this.addListener(P,this._onChangeVisibility,this);},properties:{appearance:{refine:true,init:X},value:{nullable:true,apply:W,event:f},red:{check:C,init:null,nullable:true,event:T},green:{check:C,init:null,nullable:true,event:a},blue:{check:C,init:null,nullable:true,event:t}},members:{__Ga:1e5,__Gb:null,__Gc:null,__Gd:null,__Ge:O,__Gf:12,_createChildControlImpl:function(Y,ba){var bb;switch(Y){case K:bb=new qx.ui.core.Widget;bb.addListener(m,this._onFieldMouseDown,this);bb.addListener(u,this._onFieldMouseOver,this);bb.addListener(n,this._onFieldMouseOut,this);break;case z:bb=new qx.ui.form.Button(this.tr(v));bb.setAllowStretchX(true);bb.addListener(E,this._onAutomaticBtnExecute,this);this.add(bb);break;case L:bb=new qx.ui.form.Button(this.tr(q));bb.addListener(E,this._onSelectorButtonExecute,this);this.add(bb);break;case M:bb=new qx.ui.groupbox.GroupBox(this.tr(D));bb.setLayout(new qx.ui.layout.HBox);bb.add(this._createChildControl(G,true),{flex:1});bb.add(this._createChildControl(I,true),{flex:1});this.add(bb);break;case G:bb=new qx.ui.container.Composite(new qx.ui.layout.Basic);break;case I:bb=new qx.ui.container.Composite(new qx.ui.layout.Basic);break;case A:bb=new qx.ui.form.Button(this.tr(F));bb.addListener(E,this._onColorSelectorOk,this);break;case x:bb=new qx.ui.form.Button(this.tr(r));bb.addListener(E,this._onColorSelectorCancel,this);break;};return bb||qx.ui.popup.Popup.prototype._createChildControlImpl.call(this,Y);},_createBoxes:function(){this.__Gb={};var bd=this._tables;var bg,bc,be;var j=0;for(var bf in bd){bg=bd[bf];bc=new qx.ui.groupbox.GroupBox(bg.label);bc.setLayout(new qx.ui.layout.HBox);this.__Gb[bf]=bc;this.add(bc);for(var i=0;i<this.__Gf;i++){be=this.getChildControl(S+(j++));be.setBackgroundColor(bg.values[i]||null);bc.add(be);};};},_createColorSelector:function(){if(this.__Gd){return;};var bh=new qx.ui.window.Window(this.tr(Q));this.__Gc=bh;bh.setLayout(new qx.ui.layout.VBox(16));bh.setResizable(false);bh.moveTo(20,20);this.__Gd=new qx.ui.control.ColorSelector;bh.add(this.__Gd);var bi=new qx.ui.container.Composite(new qx.ui.layout.HBox(8,p));bh.add(bi);var bk=this._createChildControl(x);var bj=this._createChildControl(A);bi.add(bk);bi.add(bj);},_applyValue:function(bl,bm){if(bl===null){this.setRed(null);this.setGreen(null);this.setBlue(null);}else {var bn=qx.util.ColorUtil.stringToRgb(bl);this.setRed(bn[0]);this.setGreen(bn[1]);this.setBlue(bn[2]);};this.getChildControl(G).setBackgroundColor(bl);this._rotatePreviousColors();},_rotatePreviousColors:function(){if(!this._tables){return;};var bq=this._tables[this.__Ge].values;var br=this.__Gb[this.__Ge];if(!bq){return;};var bs=this.getValue();if(!bs){return;};var bp=bq.indexOf(bs);if(bp!=-1){qx.lang.Array.removeAt(bq,bp);}else if(bq.length==this.__Gf){bq.shift();};bq.push(bs);var bo=br.getChildren();for(var i=0;i<bo.length;i++){bo[i].setBackgroundColor(bq[i]||null);};},_onFieldMouseDown:function(e){var bt=this.getChildControl(I).getBackgroundColor();this.setValue(bt);if(bt){this.hide();};},_onFieldMouseOver:function(e){this.getChildControl(I).setBackgroundColor(e.getTarget().getBackgroundColor());},_onFieldMouseOut:function(e){var bx=this.getRed();var bw=this.getGreen();var bu=this.getBlue();var bv=null;if(bx!==null||bw!==null||bu!==null){bv=qx.util.ColorUtil.rgbToRgbString([bx,bw,bu]);};this.getChildControl(I).setBackgroundColor(bv);},_onAutomaticBtnExecute:function(){this.setValue(null);this.hide();},_onSelectorButtonExecute:function(){this._createColorSelector();this.exclude();var bA=this.getRed();var bz=this.getGreen();var by=this.getBlue();if(bA===null||bz===null||by===null){bA=255;bz=255;by=255;};this.__Gd.setRed(bA);this.__Gd.setGreen(bz);this.__Gd.setBlue(by);this.__Gc.open();},_onColorSelectorOk:function(){var bB=this.__Gd;this.setValue(qx.util.ColorUtil.rgbToRgbString([bB.getRed(),bB.getGreen(),bB.getBlue()]));this.__Gc.close();},_onColorSelectorCancel:function(){this.__Gc.close();},_onChangeVisibility:function(e){if(this.getVisibility()==B){var bF=this.getRed();var bE=this.getGreen();var bC=this.getBlue();var bD=null;if(bF!==null||bE!==null||bC!==null){bD=qx.util.ColorUtil.rgbToRgbString([bF,bE,bC]);};this.getChildControl(G).setBackgroundColor(bD);this.getChildControl(I).setBackgroundColor(bD);};},_tables:{core:{label:qx.locale.Manager.tr(w),values:[c,d,g,o,R,s,N,J,U,b,l,k]},recent:{label:qx.locale.Manager.tr(H),values:[]}}},destruct:function(){this._disposeObjects(V,y);this._tables=this.__Gb=null;}});})();(function(){var by="black",bx="_applyGreen",bw="#333",bv="aqua",bu="colorbucket",bt="qx.event.type.Data",bs="Hex",br="#BBB",bq="decoration/colorselector/brightness-handle.gif",bp="Visual",be="_applySaturation",bd="Preview (Old/New)",bc="FFFFFF",bb="decoration/colorselector/brightness-field.png",ba="white",Y="orange",X="x",W="_applyRed",V="_applyBlue",U="maroon",bF="Presets",bG="_applyBrightness",bD="#999",bE="purple",bB="red",bC="blue",bz="_applyHue",bA="decoration/colorselector/huesaturation-handle.gif",bH="colorselector",bI="qx.ui.control.ColorSelector",bi="lime",bh="#EEE",bk="olive",bj="RGB",bm="decoration/colorselector/huesaturation-field.jpg",bl="navy",bo="teal",bn="green",bg="yellow",bf="#666",a="fuchsia",b="Details",c="",d="colorbucket#",f="appear",g="HSB",h="control-pane",k="preset-grid",l="mouseup",m="preset-field-set",bM="#",bL="qx.event.type.Event",bK="mousemove",bJ="hex-field-composite",bQ="y",bP="rgb-spinner-composite",bO="hsb-spinner-composite",bN="control-bar",bS="mousewheel",bR="visual-pane",E="input-field-set",F="preview-field-set",C="brightnessModifier",D="blueModifier",I="saturationModifier",J="middle",G="Number",H="redModifier",A="greenModifier",B="hueModifier",u="Integer",t="brightness-pane",w="rgb-spinner-red",v="preview-content-old",q="rgb-spinner-green",p="brightnessField",s="hue-saturation-field",r="hsb-spinner-brightness",o="preview-content-new",n="hue-saturation-pane",O="rgb-spinner-blue",P="hsb-spinner-hue",Q="hsb-spinner-saturation",R="hex-field",K="mousedown",L="hueSaturationField",M="brightness-field",N="changeValue",S="hexField",T="hsbSpinner",z="rgbSpinner",y="hue-saturation-handle",x="brightness-handle";qx.Class.define(bI,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IColorForm],construct:function(){qx.ui.core.Widget.call(this);this._setLayout(new qx.ui.layout.VBox());this._createChildControl(bN);this.addListener(f,this._onAppear,this);},events:{"dialogok":bL,"dialogcancel":bL,"changeValue":bt},properties:{appearance:{refine:true,init:bH},red:{check:u,init:255,apply:W},green:{check:u,init:255,apply:bx},blue:{check:u,init:255,apply:V},hue:{check:G,init:0,apply:bz},saturation:{check:G,init:0,apply:be},brightness:{check:G,init:100,apply:bG}},members:{__Gg:null,__Gh:[U,bB,Y,bg,bk,bE,a,bi,bn,bl,bC,bv,bo,by,bw,bf,bD,br,bh,ba],__Gi:c,__Gj:0,__Gk:0,__Gl:0,__nL:true,__Gm:false,_createChildControlImpl:function(bT,bU){var bV;switch(bT){case bN:bV=new qx.ui.container.Composite(new qx.ui.layout.HBox(10));bV.add(this.getChildControl(h));bV.add(this.getChildControl(bR));this._add(bV);break;case bR:bV=new qx.ui.groupbox.GroupBox(this.tr(bp));bV.setLayout(new qx.ui.layout.HBox(10));bV.add(this.getChildControl(n));bV.add(this.getChildControl(t));break;case h:bV=new qx.ui.container.Composite(new qx.ui.layout.VBox(0));bV.add(this.getChildControl(m));bV.add(this.getChildControl(E));bV.add(this.getChildControl(F),{flex:1});break;case n:bV=new qx.ui.container.Composite(new qx.ui.layout.Canvas());bV.setAllowGrowY(false);bV.addListener(bS,this._onHueSaturationPaneMouseWheel,this);bV.add(this.getChildControl(s));bV.add(this.getChildControl(y),{left:0,top:256});break;case s:bV=new qx.ui.basic.Image(bm);bV.addListener(K,this._onHueSaturationFieldMouseDown,this);break;case y:bV=new qx.ui.basic.Image(bA);bV.addListener(K,this._onHueSaturationFieldMouseDown,this);bV.addListener(l,this._onHueSaturationHandleMouseUp,this);bV.addListener(bK,this._onHueSaturationHandleMouseMove,this);break;case t:bV=new qx.ui.container.Composite(new qx.ui.layout.Canvas());bV.setAllowGrowY(false);bV.addListener(bS,this._onBrightnessPaneMouseWheel,this);bV.add(this.getChildControl(M));bV.add(this.getChildControl(x));break;case M:bV=new qx.ui.basic.Image(bb);bV.addListener(K,this._onBrightnessFieldMouseDown,this);break;case x:bV=new qx.ui.basic.Image(bq);bV.addListener(K,this._onBrightnessHandleMouseDown,this);bV.addListener(l,this._onBrightnessHandleMouseUp,this);bV.addListener(bK,this._onBrightnessHandleMouseMove,this);break;case m:bV=new qx.ui.groupbox.GroupBox(this.tr(bF));bV.setLayout(new qx.ui.layout.Grow());bV.add(this.getChildControl(k));break;case bu:bV=new qx.ui.core.Widget();bV.addListener(K,this._onColorFieldClick,this);break;case k:cb=new qx.ui.layout.Grid(3,3);bV=new qx.ui.container.Composite(cb);var cc;var ca;for(var i=0;i<2;i++){for(var j=0;j<10;j++){ca=i*10+j;cc=this.getChildControl(d+ca);cc.setBackgroundColor(this.__Gh[ca]);bV.add(cc,{column:j,row:i});};};break;case E:bV=new qx.ui.groupbox.GroupBox(this.tr(b));var cb=new qx.ui.layout.VBox();cb.setSpacing(10);bV.setLayout(cb);bV.add(this.getChildControl(bJ));bV.add(this.getChildControl(bP));bV.add(this.getChildControl(bO));break;case F:bV=new qx.ui.groupbox.GroupBox(this.tr(bd));var cb=new qx.ui.layout.HBox(10);bV.setLayout(cb);bV.add(this.getChildControl(v),{flex:1});bV.add(this.getChildControl(o),{flex:1});break;case bJ:var bY=new qx.ui.layout.HBox(4);bY.setAlignY(J);bV=new qx.ui.container.Composite(bY);var ce=new qx.ui.basic.Label(this.tr(bs));ce.setWidth(30);bV.add(ce);var cd=new qx.ui.basic.Label(bM);bV.add(cd);bV.add(this.getChildControl(R));break;case R:bV=new qx.ui.form.TextField(bc);bV.setMaxLength(6);bV.setFilter(/[0-9A-Fa-f]/);bV.setWidth(55);bV.addListener(N,this._onHexFieldChange,this);break;case bP:var bY=new qx.ui.layout.HBox(4);bY.setAlignY(J);bV=new qx.ui.container.Composite(bY);var bW=new qx.ui.basic.Label(this.tr(bj));bW.setWidth(30);bV.add(bW);bV.add(this.getChildControl(w));bV.add(this.getChildControl(q));bV.add(this.getChildControl(O));break;case w:bV=new qx.ui.form.Spinner(0,255,255);bV.setWidth(50);bV.addListener(N,this._setRedFromSpinner,this);break;case q:bV=new qx.ui.form.Spinner(0,255,255);bV.setWidth(50);bV.addListener(N,this._setGreenFromSpinner,this);break;case O:bV=new qx.ui.form.Spinner(0,255,255);bV.setWidth(50);bV.addListener(N,this._setBlueFromSpinner,this);break;case bO:var bY=new qx.ui.layout.HBox(4);bY.setAlignY(J);bV=new qx.ui.container.Composite(bY);var bX=new qx.ui.basic.Label(this.tr(g));bX.setWidth(30);bV.add(bX);bV.add(this.getChildControl(P));bV.add(this.getChildControl(Q));bV.add(this.getChildControl(r));break;case P:bV=new qx.ui.form.Spinner(0,0,360);bV.setWidth(50);bV.addListener(N,this._setHueFromSpinner,this);break;case Q:bV=new qx.ui.form.Spinner(0,0,100);bV.setWidth(50);bV.addListener(N,this._setSaturationFromSpinner,this);break;case r:bV=new qx.ui.form.Spinner(0,100,100);bV.setWidth(50);bV.addListener(N,this._setBrightnessFromSpinner,this);break;case v:bV=new qx.ui.core.Widget();break;case o:bV=new qx.ui.core.Widget();break;};return bV||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bT);},setValue:function(cf){var cg;if(cf==null){this.__nL=true;cg=[255,255,255];}else {cg=qx.util.ColorUtil.stringToRgb(cf);this.__nL=false;};this.__Gm=true;this.setRed(cg[0]);this.setGreen(cg[1]);this.__Gm=false;this.setBlue(cg[2]);},getValue:function(){return this.__nL?null:qx.util.ColorUtil.rgbToHexString([this.getRed(),this.getGreen(),this.getBlue()]);},resetValue:function(){this.__nL=true;this.__Gm=true;this.setRed(255);this.setGreen(255);this.__Gm=false;this.setBlue(255);},__nN:function(){if(!this.__Gm){this.__nL=false;this.fireDataEvent(N,this.getValue());};},_applyRed:function(ch,ci){if(this.__Gg===null){this.__Gg=H;};if(this.__Gg!==z){this.getChildControl(w).setValue(ch);};if(this.__Gg!==S){this._setHexFromRgb();};switch(this.__Gg){case z:case S:case H:this._setHueFromRgb();};this._setPreviewFromRgb();this.__nN();if(this.__Gg===H){this.__Gg=null;};},_applyGreen:function(cj,ck){if(this.__Gg===null){this.__Gg=A;};if(this.__Gg!==z){this.getChildControl(q).setValue(cj);};if(this.__Gg!==S){this._setHexFromRgb();};switch(this.__Gg){case z:case S:case A:this._setHueFromRgb();};this._setPreviewFromRgb();this.__nN();if(this.__Gg===A){this.__Gg=null;};},_applyBlue:function(cl,cm){if(this.__Gg===null){this.__Gg=D;};if(this.__Gg!==z){this.getChildControl(O).setValue(cl);};if(this.__Gg!==S){this._setHexFromRgb();};switch(this.__Gg){case z:case S:case D:this._setHueFromRgb();};this._setPreviewFromRgb();this.__nN();if(this.__Gg===D){this.__Gg=null;};},_applyHue:function(cn,co){if(this.__Gg===null){this.__Gg=B;};if(this.__Gg!==T){this.getChildControl(P).setValue(cn);};if(this.__Gg!==L){if(this.getChildControl(y).getBounds()){this.getChildControl(y).setDomLeft(Math.round(cn/1.40625)+this.getChildControl(n).getPaddingLeft());}else {this.getChildControl(y).setLayoutProperties({left:Math.round(cn/1.40625)});};};switch(this.__Gg){case T:case L:case B:this._setRgbFromHue();};this._setBrightnessGradiant();if(this.__Gg===B){this.__Gg=null;};},_applySaturation:function(cp,cq){if(this.__Gg===null){this.__Gg=I;};if(this.__Gg!==T){this.getChildControl(Q).setValue(cp);};if(this.__Gg!==L){this._setBrightnessGradiant();if(this.getChildControl(y).getBounds()){this.getChildControl(y).setDomTop(256-Math.round(cp*2.56)+this.getChildControl(n).getPaddingTop());}else {this.getChildControl(y).setLayoutProperties({top:256-Math.round(cp*2.56)});};};switch(this.__Gg){case T:case L:case I:this._setRgbFromHue();};if(this.__Gg===I){this.__Gg=null;};},_applyBrightness:function(cr,cs){if(this.__Gg===null){this.__Gg=C;};if(this.__Gg!==T){this.getChildControl(r).setValue(cr);};if(this.__Gg!==p){var ct=256-Math.round(cr*2.56);if(this.getChildControl(x).getBounds()){this.getChildControl(x).setDomTop(ct+this.getChildControl(t).getPaddingTop());}else {this.getChildControl(x).setLayoutProperties({top:ct});};};switch(this.__Gg){case T:case p:case C:this._setRgbFromHue();};if(this.__Gg===C){this.__Gg=null;};},_onBrightnessHandleMouseDown:function(e){this.getChildControl(x).capture();this.__Gi=x;var cw=this.getChildControl(M).getContainerLocation();var cv=this.getChildControl(x).getContainerLocation();var cu=this.getChildControl(M).getBounds();this.__Gj=cw.top+(e.getDocumentTop()-cv.top)-cu.top;e.stopPropagation();},_onBrightnessHandleMouseUp:function(e){this.getChildControl(x).releaseCapture();this.__Gi=null;},_onBrightnessHandleMouseMove:function(e){if(this.__Gi===x){this._setBrightnessOnFieldEvent(e);e.stopPropagation();};},_onBrightnessFieldMouseDown:function(e){var location=this.getChildControl(M).getContainerLocation();var cx=this.getChildControl(x).getBounds();this.__Gj=location.top+(cx.height/2);this._setBrightnessOnFieldEvent(e);this.getChildControl(x).capture();this.__Gi=x;},_onBrightnessPaneMouseWheel:function(e){this.setBrightness(qx.lang.Number.limit(this.getBrightness()-e.getWheelDelta(bQ),0,100));e.stop();},_setBrightnessOnFieldEvent:function(e){var cy=qx.lang.Number.limit(e.getDocumentTop()-this.__Gj,0,256);this.__Gg=p;if(this.getChildControl(x).getBounds()){this.getChildControl(x).setDomTop(cy);}else {this.getChildControl(x).setLayoutProperties({top:cy});};this.setBrightness(100-Math.round(cy/2.56));this.__Gg=null;},_onHueSaturationHandleMouseUp:function(e){if(this.__Gi){e.stopPropagation();this.getChildControl(y).releaseCapture();this.__Gi=null;};},_onHueSaturationHandleMouseMove:function(e){if(this.__Gi===y){this._setHueSaturationOnFieldEvent(e);e.stopPropagation();};},_onHueSaturationFieldMouseDown:function(e){var location=this.getChildControl(s).getContainerLocation();var cz=this.getChildControl(y).getBounds();var cA=this.getChildControl(s).getBounds();this.__Gk=location.top+(cz.height/2)-cA.top;this.__Gl=location.left+(cz.width/2)-cA.left;this._setHueSaturationOnFieldEvent(e);this.getChildControl(y).capture();this.__Gi=y;},_onHueSaturationPaneMouseWheel:function(e){this.setSaturation(qx.lang.Number.limit(this.getSaturation()-e.getWheelDelta(bQ),0,100));this.setHue(qx.lang.Number.limit(this.getHue()+e.getWheelDelta(X),0,360));e.stop();},_setHueSaturationOnFieldEvent:function(e){var cC=qx.lang.Number.limit(e.getDocumentTop()-this.__Gk,0,256);var cB=qx.lang.Number.limit(e.getDocumentLeft()-this.__Gl,0,256);this.getChildControl(y).setDomPosition(cB,cC);this.__Gg=L;this.setSaturation(100-Math.round(cC/2.56));this.setHue(Math.round(cB*1.40625));this.__Gg=null;},_setRedFromSpinner:function(){if(this.__Gg!==null){return;};this.__Gg=z;this.setRed(this.getChildControl(w).getValue());this.__Gg=null;},_setGreenFromSpinner:function(){if(this.__Gg!==null){return;};this.__Gg=z;this.setGreen(this.getChildControl(q).getValue());this.__Gg=null;},_setBlueFromSpinner:function(){if(this.__Gg!==null){return;};this.__Gg=z;this.setBlue(this.getChildControl(O).getValue());this.__Gg=null;},_setHueFromSpinner:function(){if(this.__Gg!==null){return;};this.__Gg=T;this.setHue(this.getChildControl(P).getValue());this.__Gg=null;},_setSaturationFromSpinner:function(){if(this.__Gg!==null){return;};this.__Gg=T;this.setSaturation(this.getChildControl(Q).getValue());this.__Gg=null;},_setBrightnessFromSpinner:function(){if(this.__Gg!==null){return;};this.__Gg=T;this.setBrightness(this.getChildControl(r).getValue());this.__Gg=null;},_onHexFieldChange:function(e){if(this.__Gg!==null){return;};try{var cE=this.getChildControl(R);var cD=qx.util.ColorUtil.hexStringToRgb(bM+cE.getValue());}catch(cF){return;};this.__Gg=S;this.setRed(cD[0]);this.setGreen(cD[1]);this.setBlue(cD[2]);this.__Gg=null;},_setHexFromRgb:function(){var cG=qx.util.ColorUtil.rgbToHexString([this.getRed(),this.getGreen(),this.getBlue()]);cG=cG.substring(1,cG.length);this.getChildControl(R).setValue(cG);},_onColorFieldClick:function(e){var cH=e.getTarget().getBackgroundColor();if(!cH){this.error("Missing backgroundColor value for field: "+e.getTarget());return;};var cI=qx.util.ColorUtil.stringToRgb(cH);this.setRed(cI[0]);this.setGreen(cI[1]);this.setBlue(cI[2]);},_setHueFromRgb:function(){switch(this.__Gg){case T:case L:case p:break;default:var cJ=qx.util.ColorUtil.rgbToHsb([this.getRed(),this.getGreen(),this.getBlue()]);this.setHue(cJ[0]);this.setSaturation(cJ[1]);this.setBrightness(cJ[2]);};},_setRgbFromHue:function(){switch(this.__Gg){case z:case S:break;default:var cK=qx.util.ColorUtil.hsbToRgb([this.getHue(),this.getSaturation(),this.getBrightness()]);this.setRed(cK[0]);this.setGreen(cK[1]);this.setBlue(cK[2]);};},_setPreviewFromRgb:function(){var cL=qx.util.ColorUtil.rgbToRgbString([this.getRed(),this.getGreen(),this.getBlue()]);this.getChildControl(o).setBackgroundColor(cL);},setPreviousColor:function(cM,cN,cO){var cP=qx.util.ColorUtil.rgbToRgbString([cM,cN,cO]);this.getChildControl(v).setBackgroundColor(cP);this.setRed(cM);this.setGreen(cN);this.setBlue(cO);},_setBrightnessGradiant:function(){var cQ=qx.util.ColorUtil;var cR=cQ.hsbToRgb([this.getHue(),this.getSaturation(),255]);var cS=cQ.rgbToRgbString(cR);this.getChildControl(M).setBackgroundColor(cS);},_onAppear:function(e){var cT=qx.util.ColorUtil.rgbToRgbString([this.getRed(),this.getGreen(),this.getBlue()]);this.getChildControl(v).setBackgroundColor(cT);this.getChildControl(o).setBackgroundColor(cT);}}});})();
});