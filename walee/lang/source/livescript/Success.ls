qx.Class.define \wl.lang.Success,

  extend: wl.lang.Validation

  members:
    map: (fn) -> new wl.lang.Success(fn(@getValue!))
    isSuccess: -> true
    success: (fn)-> @map(fn)
