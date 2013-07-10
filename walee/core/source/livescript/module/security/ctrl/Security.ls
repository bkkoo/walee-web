qx.Class.define \wl.core.module.security.ctrl.Security,

  extend: qx.core.Object

  include:
    wl.core.aquery.MQuery

  construct: !->
    @channel = postal.channel(\security.event)
    @subscribe \authenticate.request, ((data)-> @authenticate(data.username, data.password)).bind(@)

  members:

    authenticate: (username, password)->
      @_authenticate username, password, ((rs)->
        msg = if rs.isSuccess! then \success else \failure
        @channel.publish("authenticate.#{msg}", {data: rs.getValue!})
      ).bind(@)

    subscribe: (topic, callback) ->
      @channel.subscribe(topic, callback)

    loginPrompt: ->
      @aquery!(\^ctrl.login)!.prompt!
