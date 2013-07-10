qx.Class.define('wl.core.module.security.view.Login', {
  extend: wl.core.view.View,
  construct: function(slot){
    this.base(arguments, slot, 'login-prompt');
  },
  members: {
    showPrompt: function(){
      return this._show('prompt');
    },
    showLoading: function(){
      return this._show('loading');
    },
    showFailure: function(){
      return this._show('failure');
    },
    _getComponent: function(name){
      var that;
      if (that = this.qry(name)) {
        return that;
      } else {
        if (that = this._createComponent(name)) {
          return that;
        } else {
          return this.error("Can't create component `" + name + "`!");
        }
      }
    },
    _createComponent: function(name){
      var q, x$, rootSlot, y$;
      q = this.aquery()('^ui');
      switch (name) {
      case 'username':
        return q('form.txt*')(name)();
      case 'password':
        return q('form.txtPassword*')(name)();
      case 'login-btn':
        x$ = q('form.button*')(name)(this.tr('login'));
        x$.addListener('click', this._bindAction('login'));
        x$;
        return x$;
        break;
      case 'root-slot':
        return rootSlot = q('box.composite*')('root-slot')('canvas');
      case 'content-slot':
        y$ = q('groupbox.box*')('content-slot')("", "", 'grow');
        this._setContentSlotLayout(y$, this._getComponent('root-slot'));
        y$;
        return y$;
      }
    },
    _setContentSlotLayout: function(rootSlot, contentSlot){
      var reLayout;
      reLayout = function(){
        return contentSlot.setLayoutProperties(this._setContentSlotLayoutImpl(rootSlot.getBounds(), contentSlot));
      }.bind(this);
      return [rootSlot, contentSlot].forEach(function(it){
        return it.addListener('resize', reLayout);
      });
    },
    _show: function(state){
      var x$;
      x$ = this._getComponent('content-slot');
      x$.removeAll();
      x$.add(this.getUi(state));
      return this.open();
    },
    actionLogin: function(){
      return {
        username: this.qry('username').getValue(),
        password: this.qry('password').getValue()
      };
    }
  }
});