qx.Class.define \wl.lang.Failure,

  extend: wl.lang.Validation
  members:
    failure: (fn)-> new wl.lang.Failure(fn(@getValue!))
