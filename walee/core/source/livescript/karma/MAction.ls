qx.Mixin.define \wl.core.karma.MAction,

  members:

    efx1: (member, obj, obj-member, filters, converters) ->
      Property = wl.core.karma.act.Property1
      Act  = wl.core.karma.act.Act1
      Func = wl.core.karma.act.Func1
      @_efx(Property, Act, Func, member, obj, obj-member, filters, converters)

    efxM: (member, obj, obj-member, filters, converters) ->
      Property = wl.core.karma.act.PropertyM
      Act  = wl.core.karma.act.ActM
      Func = wl.core.karma.act.FuncM
      @_efx(Property, Act, Func, member, obj, obj-member, filters, converters)

    _efx: (Property, Act, Func, member, obj, obj-member, filters, converters) ->

      (if @[member] instanceof Function then Act else Property)
        cause = new ..(@, member)

      incidence = (
        if obj instanceof Function
          new Func(obj,, filters, converters)
        else if obj[obj-member] instanceof Function
          new Act(obj, obj-member,, filters, converters)
        else
          new Property(obj, obj-member,, filters, converters)
      )

      cause.effect(incidence)
