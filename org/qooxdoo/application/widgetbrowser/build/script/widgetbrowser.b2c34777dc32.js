qx.$$packageData['512']={"locales":{},"resources":{"qx/icon/Oxygen/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/internet-feed-reader.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/internet-telephony.png":[16,16,"png","qx"],"qx/icon/Oxygen/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Oxygen/22/apps/utilities-calculator.png":[22,22,"png","qx"],"qx/icon/Oxygen/32/apps/office-address-book.png":[32,32,"png","qx"],"qx/icon/Oxygen/32/status/dialog-error.png":[32,32,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/internet-feed-reader.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/internet-telephony.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/22/apps/utilities-calculator.png":[22,22,"png","qx"],"qx/icon/Tango/32/apps/office-address-book.png":[32,32,"png","qx"],"qx/icon/Tango/32/status/dialog-error.png":[32,32,"png","qx"]},"translations":{"C":{},"en":{}}};
qx.Part.$$notifyLoad("512", function() {
(function(){var l="Second Window",k="Page 1",j="bottom",h="Use move frame",g="Show Statusbar",f="Show Close",d="icon/32/apps/office-address-book.png",c="Third Window",b="icon/22/apps/utilities-calculator.png",a="Show Maximize",R="Demo loaded",Q="Allow Close",P="Use resize frame",O="resizable",N="Allow Maximize",M="value",L="The second window",K="execute",J="Page 3",I="move",s="Resizable ",t="First Window",q="resize",r="Moveable",o="#ddd",p="Allow Minimize",m="Resizable",n="Open Modal Dialog 1",u="top",v="Movable",A="Welcome to your first own Window.<br/>Have fun!",z="right",C="Basics",B="Show Minimize",E="Application is ready",D="icon/16/apps/internet-feed-reader.png",x="widgetbrowser.pages.Window",H="Page 2",G="left",F="icon/16/apps/internet-telephony.png",w="icon/16/apps/office-calendar.png",y="changeValue";qx.Class.define(x,{extend:widgetbrowser.pages.AbstractPage,construct:function(){widgetbrowser.pages.AbstractPage.call(this);this.__qJ=new qx.ui.window.Desktop().set({decorator:new qx.ui.decoration.Single(10,null,o)});this.add(this.__qJ,{edge:0,top:0});this.initWidgets();},members:{__qJ:null,initWidgets:function(){var V,U,T;var S=this._widgets;V=this.__Qx();S.push(V);V.open();this.__qJ.add(V,{left:0,top:0});U=this.__Qy();S.push(U);U.open();this.__qJ.add(U,{left:300,top:100});T=this.__Qz();S.push(T);T.open();this.__qJ.add(T,{left:80,top:230});},__Qx:function(){var Y=new qx.ui.window.Window(t,w);Y.setLayout(new qx.ui.layout.VBox(10));Y.setShowStatusbar(true);Y.setStatus(R);Y.addListener(I,function(e){this.debug("Moved to: "+e.getData().left+"x"+e.getData().top);},this);Y.addListener(q,function(e){this.debug("Resized to: "+e.getData().width+"x"+e.getData().height);},this);var X=new qx.ui.basic.Atom(A,d);X.setRich(true);Y.add(X);var W=new qx.ui.tabview.TabView;Y.add(W,{flex:1});var bc=new qx.ui.tabview.Page(k);W.add(bc);var ba=new qx.ui.tabview.Page(H);W.add(ba);var bb=new qx.ui.tabview.Page(J);W.add(bb);return Y;},__Qy:function(){var bj=new qx.ui.window.Window(l,D);bj.setLayout(new qx.ui.layout.VBox(10));bj.setStatus(E);var bs=new qx.ui.basic.Atom(L,b);bj.add(bs);var bd=new qx.ui.container.Composite;bd.setLayout(new qx.ui.layout.HBox(10));bj.add(bd,{flex:1});var bl=new qx.ui.groupbox.GroupBox(C);bl.setLayout(new qx.ui.layout.VBox(4));bd.add(bl,{flex:1});var bg=new qx.ui.form.CheckBox(f);bg.setValue(true);bg.addListener(y,function(e){bj.setShowClose(e.getData());});bl.add(bg);var br=new qx.ui.form.CheckBox(a);br.setValue(true);br.addListener(y,function(e){bj.setShowMaximize(e.getData());});bl.add(br);var bk=new qx.ui.form.CheckBox(B);bk.setValue(true);bk.addListener(y,function(e){bj.setShowMinimize(e.getData());});bl.add(bk);var bn=new qx.ui.form.CheckBox(Q);bn.setValue(true);bn.addListener(y,function(e){bj.setAllowClose(e.getData());});bl.add(bn);var bt=new qx.ui.form.CheckBox(N);bt.setValue(true);bt.addListener(y,function(e){bj.setAllowMaximize(e.getData());});bl.add(bt);var bi=new qx.ui.form.CheckBox(p);bi.setValue(true);bi.addListener(y,function(e){bj.setAllowMinimize(e.getData());});bl.add(bi);var be=new qx.ui.form.CheckBox(g);be.setValue(false);be.addListener(y,function(e){bj.setShowStatusbar(e.getData());});bl.add(be);var bv=new qx.ui.groupbox.GroupBox(m);bv.setLayout(new qx.ui.layout.VBox(4));bd.add(bv,{flex:1});var bp=new qx.ui.form.CheckBox(P);bp.setValue(true);bp.addListener(y,function(e){bj.setUseResizeFrame(e.getData());});bv.add(bp);var bq=[u,z,j,G];for(var i=0;i<bq.length;i++){var bo=bq[i];var bh=new qx.ui.form.CheckBox(s+bo).set({value:true});bh.bind(M,bj,O+qx.lang.String.firstUp(bo));bv.add(bh);};var bf=new qx.ui.groupbox.GroupBox(r);bf.setLayout(new qx.ui.layout.VBox(4));bd.add(bf,{flex:1});var bm=new qx.ui.form.CheckBox(v);bm.setValue(true);bm.addListener(y,function(e){bj.setMovable(e.getData());});bf.add(bm);var bu=new qx.ui.form.CheckBox(h);bu.addListener(y,function(e){bj.setUseMoveFrame(e.getData());});bf.add(bu);return bj;},__Qz:function(){var bw=new qx.ui.window.Window(c,F);bw.setLayout(new qx.ui.layout.VBox);bw.setMinWidth(200);bw.setMaxWidth(450);bw.setMaxHeight(400);bw.setAllowMaximize(false);var bx=this.__QA();this._widgets.push(bx);var by=new qx.ui.form.Button(n,w);by.addListener(K,bx.open,bx);bw.add(by);return bw;},__QA:function(){var bA=new qx.ui.window.Window("First Modal Dialog");bA.setLayout(new qx.ui.layout.VBox(10));bA.setModal(true);bA.moveTo(150,150);this.__qJ.add(bA);var bz=this.__QB();this._widgets.push(bz);var bC=new qx.ui.form.Button("Open Modal Dialog 2","icon/16/apps/office-calendar.png");bC.addListener("execute",bz.open,bz);bA.add(bC);var bB=new qx.ui.form.CheckBox("Modal");bB.setValue(true);bA.add(bB);bB.addListener("changeValue",function(e){bA.setModal(e.getData());});return bA;},__QB:function(){var bE=new qx.ui.window.Window("Second Modal Dialog");bE.setLayout(new qx.ui.layout.VBox(10));bE.setModal(true);bE.setShowClose(false);bE.moveTo(300,300);this.__qJ.add(bE);var bD=new qx.ui.basic.Atom("Do you want to fly to Berlin?","icon/32/status/dialog-error.png");bE.add(bD);var bG=new qx.ui.container.Composite;bG.setLayout(new qx.ui.layout.HBox(10,"right"));bE.add(bG);var bH=new qx.ui.form.Button("Yes","icon/16/actions/dialog-ok.png");bH.addListener("execute",function(e){bE.close();});bG.add(bH);var bF=new qx.ui.form.Button("No","icon/16/actions/dialog-cancel.png");bF.addListener("execute",function(e){alert("Sorry, please click 'Yes'!");});bG.add(bF);return bE;}}});})();(function(){var a="qx.ui.window.Desktop";qx.Class.define(a,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.window.MDesktop,qx.ui.core.MBlocker],implement:qx.ui.window.IDesktop,construct:function(b){qx.ui.core.Widget.call(this);b=b||new qx.ui.window.Window.DEFAULT_MANAGER_CLASS();this.getContentElement().disableScrolling();this._setLayout(new qx.ui.layout.Canvas());this.setWindowManager(b);}});})();
});