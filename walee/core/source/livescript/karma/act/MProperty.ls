qx.Mixin.define \wl.core.karma.act.MProperty,

  members:

    _init:(obj, member) ->

      qx.lang.String.capitalize(member)
        get = "get#{..}"
        @_member = set = "set#{..}"

      @_property = member
      @_getFn = if obj[get] then that else obj[get] = -> obj[member]
      @_setFn = if obj[set] then that else obj[set] = (v) -> obj[member] = v
      
      @_onReaction = (v)-> @_setFn.call(obj, v); @_getFn.call(obj)

      @observe!
    
    getProperty: -> @_property
    _onAction: ->
      @_getFn!
        @passedFilters(.., @, []) && @intercept(@convert(..), [@])

