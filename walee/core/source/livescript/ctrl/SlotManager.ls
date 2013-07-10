qx.Class.define \wl.core.ctrl.SlotManager,

  extend: qx.core.Object,

  construct: !->
    @base(arguments)
    @appRoot = qx.core.Init.getApplication!.getRoot!

  members:

    slotOf: (method, slot)->
      if @["$#slot"]?
        if that[method]?
          that
        else
          @error("Method `#method` for slot `#slot` is not defined!")
      else
        @error("Slot `#slot` is not defined!")

    open: (box, slot) ->
      @slotOf(\open, slot).call(@, box)
      
    close: (box, slot) ->
      @slotOf(\close, slot).call(@, box)

    $appRoot :
      open: (box)->
        @appRoot.add(box, edge:0)

      close : (box)->
        @appRoot.remove(box)
