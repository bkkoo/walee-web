qx.Class.define \wl.core.alias.Ui,

  extend: wl.core.aquery.Base

  type: 'singleton'

  construct: !->
    @base(arguments, \ui)
    @info(@aquery!)
    @q = @aquery!(\^ui)

  members:

    _set-field-attrs: (field, q)->
      field.set-user-data(\attrs, {id: q.ref-name, grp: [\fields]})
      field

    _layout: (v, args) ->
      if typeof! v == \String then @q("layout.#v").apply(@, args) else v

    alias:

      basic:
        img : (q, src)-> new qx.ui.basic.Image(src)

      form:
        button: (q, label, icon, command) -> new qx.ui.form.Button(label, icon, command)
        combo: -> new qx.ui.form.ComboBox
        check: (q, label)-> new qx.ui.form.CheckBox(label)
        dateField: (q, v)-> new qx.ui.form.DateField(v)
        form: -> new qx.ui.form.Form!
        hoverBtn: (q, label, icon) -> new qx.ui.form.HoverButton(label, icon)
        label: (q, v)-> new qx.ui.basic.Label(v)
        list: (q, horizontal)-> new qx.ui.form.List(horizontal)
        listItem: (q, label, icon, model) -> new qx.ui.form.ListItem(label, icon, model)
        menuBtn: (q, label, icon, menu) -> new qx.ui.form.MenuButton(label, icon, menu)
        radioBtn: (q, label) -> new qx.ui.form.RadioButton(label)
        radioBtnGrp: (q, layout, ...args) -> new qx.ui.form.RadioButtonGroup(@_layout layout, args)
        radioGrp: (q, varargs) -> new qx.ui.form.RadioGroup(varargs)
        repeatBtn: (q, label, icon) -> new qx.ui.form.RepeatButton(label, icon)
        resetter: -> new qx.ui.form.Resetter
        selectBox: -> new qx.ui.form.SelectBox
        slider: (q, orientation)-> new qx.ui.form.Slider(orientation)
        spinner: (q, min, v, max) -> new qx.ui.form.Spinner(min, v, max)
        splitBtn: (q, label, icon, menu, command) -> new qx.ui.form.SplitButton(label, icon, menu.command)
        txt: (q, v)-> new qx.ui.form.TextField(v)
        txtArea: (q, v) -> new qx.ui.form.TextArea(v)
        txtPassword: (q, v) -> new qx.ui.form.PasswordField(v)
        toggleBtn: (q, label, icon) -> new qx.ui.form.ToggleButton(label, icon)
        virtCombo: (q, model) -> new qx.ui.form.VirtualComboBox(model)
        virtSelect: (q, model) -> new qx.ui.form.VirtualSelectBox(model)
        rendererDouble : (q, form) -> new qx.ui.form.renderer.Double(form)
        rendererSingle: (q, form) -> new qx.ui.form.renderer.Single(form)
        rendererSinglePlaceholder: (q, form) -> new qx.ui.form.renderer.SinglePlaceholder(form)

          

      layout:
        atom:  -> new qx.ui.layout.Atom
        basic: -> new qx.ui.layout.Basic
        canvas: -> new qx.ui.layout.Canvas
        dock: (q, x, y, separator-x, separator-y) -> new qx.ui.layout.Dock(x, y, separator-x, separator-y)
        flow: (q, x, y, align-x) -> new qx.ui.layout.Flow(x, y, align-x)
        grid: (q, x, y) -> new qx.ui.layout.Grid(x, y)
        grow: -> new qx.ui.layout.Grow
        hbox: (q, spacing, align-x, separator)-> new qx.ui.layout.HBox(spacing, align-x, separator)
        vbox: (q, spacing, align-y, separator)-> new qx.ui.layout.VBox(spacing, align-y, separator)
      groupbox:
        box: (q, legend, icon, layout, args) ->
          (new qx.ui.groupbox.GroupBox(legend, icon))
            if layout then ..setLayout(@_layout layout, args)

        check: (q, legend, icon, layout, args) ->
          (new qx.ui.groupbox.CheckGroupBox(legend, icon))
            if layout then ..setLayout(layout, args)

        radio: (q, legend, icon, layout, args) ->
          (new qx.ui.groupbox.RadioGroupBox(legend, icon))
            if layout then ..setLayout(layout, args)
      box:
        composite: (q, layout, ...args)-> new qx.ui.container.Composite(@_layout layout, args)
        resizer: (q, layout, ...args) -> new qx.ui.container.Resizer(@_layout layout, args)
        scroll: (q, content) -> new qx.ui.container.Scroll(content)
        slideBar: (q, orientation) -> new qx.ui.container.SlideBar(orientation)
        stack: -> new qx.ui.container.Stack

