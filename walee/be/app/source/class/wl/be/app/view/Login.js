qx.Class.define('wl.be.app.view.Login', {
  extend: wl.core.module.security.view.Login,
  construct: function(){
    this.base(arguments, 'appRoot');
  },
  members: {
    _createUiImpl: function(q, name){
      var x$, form, y$, z$, z1$, btn, z2$;
      switch (name) {
      case 'main':
        x$ = this._getComponent('root-slot');
        x$.add(this._getComponent('content-slot'));
        x$;
        return x$;
        break;
      case 'prompt':
        form = q('^ui.form.form')();
        ['username', 'password'].forEach(function(it){
          return form.add(this._getComponent(it), this.tr(it));
        }, this);
        y$ = this._getComponent('btn-login');
        y$.setMarginRight(5);
        form.addButton(y$);
        z$ = q('..rendererSinglePlaceholder')(form);
        z$.set({
          paddingTop: 8,
          paddingLeft: 5,
          width: 200
        });
        z$;
        return z$;
        break;
      case 'failure':
        z1$ = q('^ui.form.button')(this.tr("try-again"));
        z1$.addListener('click', this.showPrompt.bind(this));
        btn = z1$;
        z2$ = q('.box.composite')('hbox');
        z2$.add(q('.form.label')(this.tr("AuthenticatingFailure!")));
        z2$.add(btn);
        z2$;
        return z2$;
        break;
      case 'loading':
        return q('^ui.form.label')(this.tr('Authenticating..'));
      }
    },
    _setContentSlotLayoutImpl: function(bound, slot){
      var slotBound, calc;
      slotBound = slot.getBounds();
      calc = function(it){
        var rs;
        rs = bound[it] - slotBound[it];
        if (rs < 0) {
          return 0;
        } else {
          return Math.round(rs / 2) - 50;
        }
      };
      return {
        left: calc('width'),
        top: calc('height')
      };
    }
  }
});