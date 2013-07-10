qx.Class.define \wl.lang.Validation,

  extend: qx.core.Object,

  statics:
    success: (value) -> new wl.lang.Success(value)
    failure: (value) -> new wl.lang.Failure(value)

  construct: !(value)->
    @base(arguments)
    @_value = value

  members:
    getValue: -> @_value
    map: -> @
    failure: -> @
    success: -> @
    isSuccess: ->
    isFailure: -> not @isSuccess!
