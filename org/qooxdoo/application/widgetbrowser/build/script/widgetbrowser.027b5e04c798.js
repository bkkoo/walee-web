qx.$$packageData['258']={"locales":{},"resources":{},"translations":{"C":{},"en":{}}};
qx.Part.$$notifyLoad("258", function() {
(function(){var k="slider",j="mousedown",i="PageUp",h="mouseout",g="x",f='qx.event.type.Data',d="Left",c="Down",b="Up",a="dblclick",ba="qx.ui.form.Slider",Y="PageDown",X="mousewheel",W="_applyValue",V="_applyKnobFactor",U="End",T="height",S="y",R="Right",Q="width",r="_applyOrientation",s="Home",p="mouseover",q="floor",n="_applyMinimum",o="click",l="changeMaximum",m="keypress",v="slideAnimationEnd",w="ceil",E='qx.event.type.Event',C="losecapture",I="contextmenu",G="_applyMaximum",M="Number",K="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()",y="changeMinimum",P="pressed",O="px",N="changeValue",x="interval",A="mousemove",B="resize",D="hovered",F="left",H="top",J="mouseup",L="Integer",t="vertical",u="horizontal",z="knob";qx.Class.define(ba,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(bb){qx.ui.core.Widget.call(this);this._setLayout(new qx.ui.layout.Canvas());this.addListener(m,this._onKeyPress);this.addListener(X,this._onMouseWheel);this.addListener(j,this._onMouseDown);this.addListener(J,this._onMouseUp);this.addListener(C,this._onMouseUp);this.addListener(B,this._onUpdate);this.addListener(I,this._onStopEvent);this.addListener(o,this._onStopEvent);this.addListener(a,this._onStopEvent);if(bb!=null){this.setOrientation(bb);}else {this.initOrientation();};},events:{changeValue:f,slideAnimationEnd:E},properties:{appearance:{refine:true,init:k},focusable:{refine:true,init:true},orientation:{check:[u,t],init:u,apply:r},value:{check:K,init:0,apply:W,nullable:true},minimum:{check:L,init:0,apply:n,event:y},maximum:{check:L,init:100,apply:G,event:l},singleStep:{check:L,init:1},pageStep:{check:L,init:10},knobFactor:{check:M,apply:V,nullable:true}},members:{__uD:null,__uE:null,__uF:null,__uG:null,__uH:null,__uI:null,__uJ:null,__uK:null,__jQ:null,__uL:null,__uM:null,__uN:null,__ni:null,_forwardStates:{invalid:true},_createChildControlImpl:function(bc,bd){var be;switch(bc){case z:be=new qx.ui.core.Widget();be.addListener(B,this._onUpdate,this);be.addListener(p,this._onMouseOver);be.addListener(h,this._onMouseOut);this._add(be);break;};return be||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,bc);},_onMouseOver:function(e){this.addState(D);},_onMouseOut:function(e){this.removeState(D);},_onMouseWheel:function(e){var bh=this.getOrientation()===u?g:S;var bg=e.getWheelDelta(bh);var bf=bg>0?1:bg<0?-1:0;this.slideBy(bf*this.getSingleStep());e.stop();},_onKeyPress:function(e){var bj=this.getOrientation()===u;var bi=bj?d:b;var forward=bj?R:c;switch(e.getKeyIdentifier()){case forward:this.slideForward();break;case bi:this.slideBack();break;case Y:this.slidePageForward(100);break;case i:this.slidePageBack(100);break;case s:this.slideToBegin(200);break;case U:this.slideToEnd(200);break;default:return;};e.stop();},_onMouseDown:function(e){if(this.__uG){return;};var bm=this.__ng;var bk=this.getChildControl(z);var bl=bm?F:H;var bo=bm?e.getDocumentLeft():e.getDocumentTop();var bp=this.__uD=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bl];var bn=this.__uE=qx.bom.element.Location.get(bk.getContainerElement().getDomElement())[bl];if(e.getTarget()===bk){this.__uG=true;if(!this.__uL){this.__uL=new qx.event.Timer(100);this.__uL.addListener(x,this._fireValue,this);};this.__uL.start();this.__uH=bo+bp-bn;bk.addState(P);}else {this.__uI=true;this.__uJ=bo<=bn?-1:1;this.__uP(e);this._onInterval();if(!this.__jQ){this.__jQ=new qx.event.Timer(100);this.__jQ.addListener(x,this._onInterval,this);};this.__jQ.start();};this.addListener(A,this._onMouseMove);this.capture();e.stopPropagation();},_onMouseUp:function(e){if(this.__uG){this.releaseCapture();delete this.__uG;this.__uL.stop();this._fireValue();delete this.__uH;this.getChildControl(z).removeState(P);if(e.getType()===J){var br;var bs;var bq;if(this.__ng){br=e.getDocumentLeft()-(this._valueToPosition(this.getValue())+this.__uD);bq=qx.bom.element.Location.get(this.getContentElement().getDomElement())[H];bs=e.getDocumentTop()-(bq+this.getChildControl(z).getBounds().top);}else {br=e.getDocumentTop()-(this._valueToPosition(this.getValue())+this.__uD);bq=qx.bom.element.Location.get(this.getContentElement().getDomElement())[F];bs=e.getDocumentLeft()-(bq+this.getChildControl(z).getBounds().left);};if(bs<0||bs>this.__uF||br<0||br>this.__uF){this.getChildControl(z).removeState(D);};};}else if(this.__uI){this.__jQ.stop();this.releaseCapture();delete this.__uI;delete this.__uJ;delete this.__uK;};this.removeListener(A,this._onMouseMove);if(e.getType()===J){e.stopPropagation();};},_onMouseMove:function(e){if(this.__uG){var bu=this.__ng?e.getDocumentLeft():e.getDocumentTop();var bt=bu-this.__uH;this.slideTo(this._positionToValue(bt));}else if(this.__uI){this.__uP(e);};e.stopPropagation();},_onInterval:function(e){var bv=this.getValue()+(this.__uJ*this.getPageStep());if(bv<this.getMinimum()){bv=this.getMinimum();}else if(bv>this.getMaximum()){bv=this.getMaximum();};var bw=this.__uJ==-1;if((bw&&bv<=this.__uK)||(!bw&&bv>=this.__uK)){bv=this.__uK;};this.slideTo(bv);},_onUpdate:function(e){var by=this.getInnerSize();var bz=this.getChildControl(z).getBounds();var bx=this.__ng?Q:T;this._updateKnobSize();this.__uO=by[bx]-bz[bx];this.__uF=bz[bx];this._updateKnobPosition();},__ng:false,__uO:0,__uP:function(e){var bA=this.__ng;var bH=bA?e.getDocumentLeft():e.getDocumentTop();var bJ=this.__uD;var bB=this.__uE;var bL=this.__uF;var bI=bH-bJ;if(bH>=bB){bI-=bL;};var bF=this._positionToValue(bI);var bC=this.getMinimum();var bD=this.getMaximum();if(bF<bC){bF=bC;}else if(bF>bD){bF=bD;}else {var bG=this.getValue();var bE=this.getPageStep();var bK=this.__uJ<0?q:w;bF=bG+(Math[bK]((bF-bG)/bE)*bE);};if(this.__uK==null||(this.__uJ==-1&&bF<=this.__uK)||(this.__uJ==1&&bF>=this.__uK)){this.__uK=bF;};},_positionToValue:function(bM){var bN=this.__uO;if(bN==null||bN==0){return 0;};var bP=bM/bN;if(bP<0){bP=0;}else if(bP>1){bP=1;};var bO=this.getMaximum()-this.getMinimum();return this.getMinimum()+Math.round(bO*bP);},_valueToPosition:function(bQ){var bR=this.__uO;if(bR==null){return 0;};var bS=this.getMaximum()-this.getMinimum();if(bS==0){return 0;};var bQ=bQ-this.getMinimum();var bT=bQ/bS;if(bT<0){bT=0;}else if(bT>1){bT=1;};return Math.round(bR*bT);},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));},_setKnobPosition:function(bU){var bV=this.getChildControl(z).getContainerElement();if(this.__ng){bV.setStyle(F,bU+O,true);}else {bV.setStyle(H,bU+O,true);};},_updateKnobSize:function(){var bX=this.getKnobFactor();if(bX==null){return;};var bW=this.getInnerSize();if(bW==null){return;};if(this.__ng){this.getChildControl(z).setWidth(Math.round(bX*bW.width));}else {this.getChildControl(z).setHeight(Math.round(bX*bW.height));};},slideToBegin:function(bY){this.slideTo(this.getMinimum(),bY);},slideToEnd:function(ca){this.slideTo(this.getMaximum(),ca);},slideForward:function(){this.slideBy(this.getSingleStep());},slideBack:function(){this.slideBy(-this.getSingleStep());},slidePageForward:function(cb){this.slideBy(this.getPageStep(),cb);},slidePageBack:function(cc){this.slideBy(-this.getPageStep(),cc);},slideBy:function(cd,ce){this.slideTo(this.getValue()+cd,ce);},slideTo:function(cf,cg){if(cf<this.getMinimum()){cf=this.getMinimum();}else if(cf>this.getMaximum()){cf=this.getMaximum();}else {cf=this.getMinimum()+Math.round((cf-this.getMinimum())/this.getSingleStep())*this.getSingleStep();};if(cg){this.__uQ(cf,cg);}else {this.setValue(cf);};},__uQ:function(ch,ci){if(this.__ni){return;};var cj=+(new Date());var ck=this.getValue();var cl=function(cm){if(cm>=cj+ci){this.setValue(ch);this.__ni=null;this.fireEvent(v);}else {var cn=cm-cj;this.setValue(parseInt(cn/ci*(ch-ck)+ck));qx.bom.AnimationFrame.request(cl,this);};};qx.bom.AnimationFrame.request(cl,this);},_applyOrientation:function(co,cp){var cq=this.getChildControl(z);this.__ng=co===u;if(this.__ng){this.removeState(t);cq.removeState(t);this.addState(u);cq.addState(u);cq.setLayoutProperties({top:0,right:null,bottom:0});}else {this.removeState(u);cq.removeState(u);this.addState(t);cq.addState(t);cq.setLayoutProperties({right:0,bottom:null,left:0});};this._updateKnobPosition();},_applyKnobFactor:function(cr,cs){if(cr!=null){this._updateKnobSize();}else {if(this.__ng){this.getChildControl(z).resetWidth();}else {this.getChildControl(z).resetHeight();};};},_applyValue:function(ct,cu){if(ct!=null){this._updateKnobPosition();if(this.__uG){this.__uN=[ct,cu];}else {this.fireEvent(N,qx.event.type.Data,[ct,cu]);};}else {this.resetValue();};},_fireValue:function(){if(!this.__uN){return;};var cv=this.__uN;this.__uN=null;this.fireEvent(N,qx.event.type.Data,cv);},_applyMinimum:function(cw,cx){if(this.getValue()<cw){this.setValue(cw);};this._updateKnobPosition();},_applyMaximum:function(cy,cz){if(this.getValue()>cy){this.setValue(cy);};this._updateKnobPosition();}}});})();
});