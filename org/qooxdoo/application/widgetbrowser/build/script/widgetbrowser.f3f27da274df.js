qx.$$packageData['36']={"locales":{},"resources":{},"translations":{"C":{},"en":{}}};
qx.Part.$$notifyLoad("36", function() {
(function(){var j="px",i='</div>',h="qx.ui.decoration.Beveled",g="css.boxmodel",f='<div style="position:absolute;top:1px;left:1px;',e='border-bottom:',d='border-right:',c="",b="content",a='border-left:',x='border-top:',w="Number",v='<div style="position:absolute;top:1px;left:0px;',u='position:absolute;top:0px;left:1px;',t='<div style="overflow:hidden;font-size:0;line-height:0;">',s="absolute",r="1px",q='<div style="',p='border:',o="1px solid ",m="Color",n=";",k="_applyStyle",l='"></div>';qx.Class.define(h,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor],construct:function(y,z,A){qx.ui.decoration.Abstract.call(this);if(y!=null){this.setOuterColor(y);};if(z!=null){this.setInnerColor(z);};if(A!=null){this.setInnerOpacity(A);};},properties:{innerColor:{check:m,nullable:true,apply:k},innerOpacity:{check:w,init:1,apply:k},outerColor:{check:m,nullable:true,apply:k}},members:{__vE:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};},_isInitialized:function(){return !!this.__vE;},_applyStyle:function(){{};},getMarkup:function(){if(this.__vE){return this.__vE;};var B=qx.theme.manager.Color.getInstance();var C=[];var F=o+B.resolve(this.getOuterColor())+n;var E=o+B.resolve(this.getInnerColor())+n;C.push(t);C.push(q);C.push(p,F);C.push(qx.bom.element.Opacity.compile(0.35));C.push(l);C.push(v);C.push(a,F);C.push(d,F);C.push(qx.bom.element.Opacity.compile(1));C.push(l);C.push(q);C.push(u);C.push(x,F);C.push(e,F);C.push(qx.bom.element.Opacity.compile(1));C.push(l);var D={position:s,top:r,left:r,opacity:1};C.push(this._generateBackgroundMarkup(D));C.push(f);C.push(p,E);C.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));C.push(l);C.push(i);return this.__vE=C.join(c);},resize:function(G,H,I){if(H<4){H=4;};if(I<4){I=4;};if(qx.core.Environment.get(g)==b){var outerWidth=H-2;var outerHeight=I-2;var O=outerWidth;var N=outerHeight;var innerWidth=H-4;var innerHeight=I-4;}else {var outerWidth=H;var outerHeight=I;var O=H-2;var N=I-2;var innerWidth=O;var innerHeight=N;};var Q=j;var M=G.childNodes[0].style;M.width=outerWidth+Q;M.height=outerHeight+Q;var L=G.childNodes[1].style;L.width=outerWidth+Q;L.height=N+Q;var K=G.childNodes[2].style;K.width=O+Q;K.height=outerHeight+Q;var J=G.childNodes[3].style;J.width=O+Q;J.height=N+Q;var P=G.childNodes[4].style;P.width=innerWidth+Q;P.height=innerHeight+Q;},tint:function(R,S){this._tintBackgroundColor(R,S,R.childNodes[3].style);}},destruct:function(){this.__vE=null;}});})();(function(){var j="-tr",i="-l",h='</div>',g="scale",f="-br",e="-t",d="browser.quirksmode",c="-tl",b="-r",a='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',z="_applyBaseImage",y="-b",x="String",w="",v="-bl",u="qx.ui.decoration.GridDiv",t="-c",s="mshtml",r="engine.name",q="engine.version",o="scale-x",p="scale-y",m="no-repeat",n="0px",k="-1px",l="px";qx.Class.define(u,{extend:qx.ui.decoration.Abstract,construct:function(A,B){qx.ui.decoration.Abstract.call(this);if(A!=null){this.setBaseImage(A);};if(B!=null){this.setInsets(B);};},properties:{baseImage:{check:x,nullable:true,apply:z}},members:{_markup:null,_images:null,_edges:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};},_isInitialized:function(){return !!this._markup;},getMarkup:function(){if(this._markup){return this._markup;};var C=qx.bom.element.Decoration;var D=this._images;var E=this._edges;var F=[];F.push(a);F.push(C.create(D.tl,m,{top:0,left:0}));F.push(C.create(D.t,o,{top:0,left:E.left+l}));F.push(C.create(D.tr,m,{top:0,right:0}));F.push(C.create(D.bl,m,{bottom:0,left:0}));F.push(C.create(D.b,o,{bottom:0,left:E.left+l}));F.push(C.create(D.br,m,{bottom:0,right:0}));F.push(C.create(D.l,p,{top:E.top+l,left:0}));F.push(C.create(D.c,g,{top:E.top+l,left:E.left+l}));F.push(C.create(D.r,p,{top:E.top+l,right:0}));F.push(h);return this._markup=F.join(w);},resize:function(G,H,I){var J=this._edges;var innerWidth=H-J.left-J.right;var innerHeight=I-J.top-J.bottom;if(innerWidth<0){innerWidth=0;};if(innerHeight<0){innerHeight=0;};G.style.width=H+l;G.style.height=I+l;G.childNodes[1].style.width=innerWidth+l;G.childNodes[4].style.width=innerWidth+l;G.childNodes[7].style.width=innerWidth+l;G.childNodes[6].style.height=innerHeight+l;G.childNodes[7].style.height=innerHeight+l;G.childNodes[8].style.height=innerHeight+l;if((qx.core.Environment.get(r)==s)){if(parseFloat(qx.core.Environment.get(q))<7||(qx.core.Environment.get(d)&&parseFloat(qx.core.Environment.get(q))<8)){if(H%2==1){G.childNodes[2].style.marginRight=k;G.childNodes[5].style.marginRight=k;G.childNodes[8].style.marginRight=k;}else {G.childNodes[2].style.marginRight=n;G.childNodes[5].style.marginRight=n;G.childNodes[8].style.marginRight=n;};if(I%2==1){G.childNodes[3].style.marginBottom=k;G.childNodes[4].style.marginBottom=k;G.childNodes[5].style.marginBottom=k;}else {G.childNodes[3].style.marginBottom=n;G.childNodes[4].style.marginBottom=n;G.childNodes[5].style.marginBottom=n;};};};},tint:function(K,L){},_applyBaseImage:function(M,N){{};if(M){var R=this._resolveImageUrl(M);var S=/(.*)(\.[a-z]+)$/.exec(R);var Q=S[1];var P=S[2];var O=this._images={tl:Q+c+P,t:Q+e+P,tr:Q+j+P,bl:Q+v+P,b:Q+y+P,br:Q+f+P,l:Q+i+P,c:Q+t+P,r:Q+b+P};this._edges=this._computeEdgeSizes(O);};},_resolveImageUrl:function(T){return qx.util.AliasManager.getInstance().resolve(T);},_computeEdgeSizes:function(U){var V=qx.util.ResourceManager.getInstance();return {top:V.getImageHeight(U.t),bottom:V.getImageHeight(U.b),left:V.getImageWidth(U.l),right:V.getImageWidth(U.r)};}},destruct:function(){this._markup=this._images=this._edges=null;}});})();(function(){var j="css.borderimage.standardsyntax",i="Boolean",h="px ",g="sliceBottom",f="solid",e=";'></div>",d="<div style='",c="sliceLeft",b="sliceRight",a="repeatX",D=" fill",C="String",B="qx.ui.decoration.css3.BorderImage",A="border-box",z="transparent",y='") ',x="sliceTop",w='url("',v="hidden",u="repeatY",q="absolute",r="repeat",o="",p="round",m="shorthand",n="px",k=" ",l="stretch",s="Integer",t="_applyStyle";qx.Class.define(B,{extend:qx.ui.decoration.Abstract,construct:function(E,F){qx.ui.decoration.Abstract.call(this);if(E!=null){this.setBorderImage(E);};if(F!=null){this.setSlice(F);};},statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:C,nullable:true,apply:t},sliceTop:{check:s,init:0,apply:t},sliceRight:{check:s,init:0,apply:t},sliceBottom:{check:s,init:0,apply:t},sliceLeft:{check:s,init:0,apply:t},slice:{group:[x,b,g,c],mode:m},repeatX:{check:[l,r,p],init:l,apply:t},repeatY:{check:[l,r,p],init:l,apply:t},repeat:{group:[a,u],mode:m},fill:{check:i,init:true}},members:{__vE:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};},_isInitialized:function(){return !!this.__vE;},getMarkup:function(){if(this.__vE){return this.__vE;};var G=this._resolveImageUrl(this.getBorderImage());var H=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];var I=[this.getRepeatX(),this.getRepeatY()].join(k);var J=this.getFill()&&qx.core.Environment.get(j)?D:o;this.__vE=[d,qx.bom.element.Style.compile({"borderImage":w+G+y+H.join(k)+J+k+I,"borderStyle":f,"borderColor":z,position:q,lineHeight:0,fontSize:0,overflow:v,boxSizing:A,borderWidth:H.join(h)+n}),e].join(o);return this.__vE;},resize:function(K,L,M){K.style.width=L+n;K.style.height=M+n;},tint:function(N,O){},_applyStyle:function(P,Q,name){{};},_resolveImageUrl:function(R){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(R));}},destruct:function(){this.__vE=null;}});})();(function(){var j="insetTop",i="insetBottom",h="sliceBottom",g="_applyFill",f="The value of the property 'rightSlice' is null! ",e="sliceLeft",d="_applyBaseImage",c="sliceRight",b="The value of the property 'bottomSlice' is null! ",a="String",A="The value of the property 'leftSlice' is null! ",z="insetRight",y="sliceTop",x="The value of the property 'topSlice' is null! ",w="insetLeft",v="qx.ui.decoration.Grid",u="-l",t="set",s="-t",r="-r",p="-b",q="shorthand",n="_applySlices",o="Please verify the image '",l="_applyInsets",m="' is present.",k="Number";qx.Class.define(v,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(B,C){qx.core.Object.call(this);if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__vF=new qx.ui.decoration.css3.BorderImage();if(B){this.__vG(B);};}else {this.__vF=new qx.ui.decoration.GridDiv(B);};if(C!=null){this.__vF.setInsets(C);};{};},properties:{baseImage:{check:a,nullable:true,apply:d},insetLeft:{check:k,nullable:true,apply:l},insetRight:{check:k,nullable:true,apply:l},insetBottom:{check:k,nullable:true,apply:l},insetTop:{check:k,nullable:true,apply:l},insets:{group:[j,z,i,w],mode:q},sliceLeft:{check:k,nullable:true,apply:n},sliceRight:{check:k,nullable:true,apply:n},sliceBottom:{check:k,nullable:true,apply:n},sliceTop:{check:k,nullable:true,apply:n},slices:{group:[y,c,h,e],mode:q},fill:{apply:g}},members:{__vF:null,getMarkup:function(){return this.__vF.getMarkup();},resize:function(D,E,F){this.__vF.resize(D,E,F);},tint:function(G,H){},getInsets:function(){return this.__vF.getInsets();},_applyInsets:function(I,J,name){var K=t+qx.lang.String.firstUp(name);this.__vF[K](I);},_applySlices:function(L,M,name){var N=t+qx.lang.String.firstUp(name);if(this.__vF[N]){this.__vF[N](L);};},_applyFill:function(O,P,name){if(this.__vF.setFill){this.__vF.setFill(O);};},_applyBaseImage:function(Q,R){if(this.__vF instanceof qx.ui.decoration.GridDiv){this.__vF.setBaseImage(Q);}else {this.__vG(Q);};},__vG:function(S){this.__vF.setBorderImage(S);var bd=qx.util.AliasManager.getInstance().resolve(S);var be=/(.*)(\.[a-z]+)$/.exec(bd);var Y=be[1];var bc=be[2];var V=qx.util.ResourceManager.getInstance();var bf=V.getImageHeight(Y+s+bc);var T=V.getImageWidth(Y+r+bc);var U=V.getImageHeight(Y+p+bc);var bg=V.getImageWidth(Y+u+bc);if(false&&!this.__vF instanceof qx.ui.decoration.css3.BorderImage){var W=x+o+Y+s+bc+m;var X=f+o+Y+r+bc+m;var bb=b+o+Y+p+bc+m;var ba=A+o+Y+u+bc+m;qx.core.Assert.assertNotNull(bf,W);qx.core.Assert.assertNotNull(T,X);qx.core.Assert.assertNotNull(U,bb);qx.core.Assert.assertNotNull(bg,ba);};if(bf&&T&&U&&bg){this.__vF.setSlice([bf,T,U,bg]);};}},destruct:function(){this.__vF.dispose();this.__vF=null;}});})();
});