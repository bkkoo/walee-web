var toString$ = {}.toString, slice$ = [].slice;
qx.Class.define('wl.core.alias.Ui', {
  extend: wl.core.aquery.Base,
  type: 'singleton',
  construct: function(){
    this.base(arguments, 'ui');
    this.info(this.aquery());
    this.q = this.aquery()('^ui');
  },
  members: {
    _setFieldAttrs: function(field, q){
      field.setUserData('attrs', {
        id: q.refName,
        grp: ['fields']
      });
      return field;
    },
    _layout: function(v, args){
      if (toString$.call(v).slice(8, -1) === 'String') {
        return this.q("layout." + v).apply(this, args);
      } else {
        return v;
      }
    },
    alias: {
      basic: {
        img: function(q, src){
          return new qx.ui.basic.Image(src);
        }
      },
      form: {
        button: function(q, label, icon, command){
          return new qx.ui.form.Button(label, icon, command);
        },
        combo: function(){
          return new qx.ui.form.ComboBox;
        },
        check: function(q, label){
          return new qx.ui.form.CheckBox(label);
        },
        dateField: function(q, v){
          return new qx.ui.form.DateField(v);
        },
        form: function(){
          return new qx.ui.form.Form();
        },
        hoverBtn: function(q, label, icon){
          return new qx.ui.form.HoverButton(label, icon);
        },
        label: function(q, v){
          return new qx.ui.basic.Label(v);
        },
        list: function(q, horizontal){
          return new qx.ui.form.List(horizontal);
        },
        listItem: function(q, label, icon, model){
          return new qx.ui.form.ListItem(label, icon, model);
        },
        menuBtn: function(q, label, icon, menu){
          return new qx.ui.form.MenuButton(label, icon, menu);
        },
        radioBtn: function(q, label){
          return new qx.ui.form.RadioButton(label);
        },
        radioBtnGrp: function(q, layout){
          var args;
          args = slice$.call(arguments, 2);
          return new qx.ui.form.RadioButtonGroup(this._layout(layout, args));
        },
        radioGrp: function(q, varargs){
          return new qx.ui.form.RadioGroup(varargs);
        },
        repeatBtn: function(q, label, icon){
          return new qx.ui.form.RepeatButton(label, icon);
        },
        resetter: function(){
          return new qx.ui.form.Resetter;
        },
        selectBox: function(){
          return new qx.ui.form.SelectBox;
        },
        slider: function(q, orientation){
          return new qx.ui.form.Slider(orientation);
        },
        spinner: function(q, min, v, max){
          return new qx.ui.form.Spinner(min, v, max);
        },
        splitBtn: function(q, label, icon, menu, command){
          return new qx.ui.form.SplitButton(label, icon, menu.command);
        },
        txt: function(q, v){
          return new qx.ui.form.TextField(v);
        },
        txtArea: function(q, v){
          return new qx.ui.form.TextArea(v);
        },
        txtPassword: function(q, v){
          return new qx.ui.form.PasswordField(v);
        },
        toggleBtn: function(q, label, icon){
          return new qx.ui.form.ToggleButton(label, icon);
        },
        virtCombo: function(q, model){
          return new qx.ui.form.VirtualComboBox(model);
        },
        virtSelect: function(q, model){
          return new qx.ui.form.VirtualSelectBox(model);
        },
        rendererDouble: function(q, form){
          return new qx.ui.form.renderer.Double(form);
        },
        rendererSingle: function(q, form){
          return new qx.ui.form.renderer.Single(form);
        },
        rendererSinglePlaceholder: function(q, form){
          return new qx.ui.form.renderer.SinglePlaceholder(form);
        }
      },
      layout: {
        atom: function(){
          return new qx.ui.layout.Atom;
        },
        basic: function(){
          return new qx.ui.layout.Basic;
        },
        canvas: function(){
          return new qx.ui.layout.Canvas;
        },
        dock: function(q, x, y, separatorX, separatorY){
          return new qx.ui.layout.Dock(x, y, separatorX, separatorY);
        },
        flow: function(q, x, y, alignX){
          return new qx.ui.layout.Flow(x, y, alignX);
        },
        grid: function(q, x, y){
          return new qx.ui.layout.Grid(x, y);
        },
        grow: function(){
          return new qx.ui.layout.Grow;
        },
        hbox: function(q, spacing, alignX, separator){
          return new qx.ui.layout.HBox(spacing, alignX, separator);
        },
        vbox: function(q, spacing, alignY, separator){
          return new qx.ui.layout.VBox(spacing, alignY, separator);
        }
      },
      groupbox: {
        box: function(q, legend, icon, layout, args){
          var x$;
          x$ = new qx.ui.groupbox.GroupBox(legend, icon);
          if (layout) {
            x$.setLayout(this._layout(layout, args));
          }
          return x$;
        },
        check: function(q, legend, icon, layout, args){
          var x$;
          x$ = new qx.ui.groupbox.CheckGroupBox(legend, icon);
          if (layout) {
            x$.setLayout(layout, args);
          }
          return x$;
        },
        radio: function(q, legend, icon, layout, args){
          var x$;
          x$ = new qx.ui.groupbox.RadioGroupBox(legend, icon);
          if (layout) {
            x$.setLayout(layout, args);
          }
          return x$;
        }
      },
      box: {
        composite: function(q, layout){
          var args;
          args = slice$.call(arguments, 2);
          return new qx.ui.container.Composite(this._layout(layout, args));
        },
        resizer: function(q, layout){
          var args;
          args = slice$.call(arguments, 2);
          return new qx.ui.container.Resizer(this._layout(layout, args));
        },
        scroll: function(q, content){
          return new qx.ui.container.Scroll(content);
        },
        slideBar: function(q, orientation){
          return new qx.ui.container.SlideBar(orientation);
        },
        stack: function(){
          return new qx.ui.container.Stack;
        }
      }
    }
  }
});