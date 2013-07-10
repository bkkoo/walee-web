qx.Class.define \wl.core.module.security.ctrl.Login,

  extend: qx.core.Object

  include:
    wl.core.aquery.MQuery

  construct: !->
    @view = @aquery!(\^security.view.login)!
      ..subscribe(\action-login, @_login.bind(@))

    @securityChannel = postal.channel(\security.event)
      ..subscribe(\authenticate.success, @_authenticate.success.bind(@))
      ..subscribe(\authenticate.failure, @_authenticate.failure.bind(@))

  members:

    prompt: ->
      @view.showPrompt!

    _login: (params)->
      @view.showLoading!
      @securityChannel.publish(\authenticate.request, params)

    _authenticate:
      success: -> @view.close!
      failure: (data)-> @view.showFailure!
