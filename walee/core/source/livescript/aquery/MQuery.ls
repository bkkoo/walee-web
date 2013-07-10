qx.Mixin.define \wl.core.aquery.MQuery,
  members:
    aquery:->
      reg = if @_obj-ref-reg? then that else @_obj-ref-reg = {}
      q = new wl.core.aquery.Query(reg)
      q.query.bind(q)
