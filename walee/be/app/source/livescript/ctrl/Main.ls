qx.Class.define \wl.be.app.ctrl.Main,

  extend: qx.core.Object

  include:
    wl.be.app.MPack
    wl.core.objres.MRes
    wl.core.view.MViewFor
    wl.core.view.MUiFor

  type: 'singleton'

  members:

    init: ->
      @_mainView = (@view \main).compose(@view \mainRoot)
      @_workspaceContainer = @_mainView.getWorkspaceContainer!

      @neural = @createWorkspace \Neural
        ..setLayout (@ui \grow)
        #..add new wl.be.app.view.Neural(\../../flare.json)
        ..add (@ui \act-indy)

      @loadNeural!
    
    loadNeural: ->
      #server.getNeaural (~>
        #@neural
      #)

    createWorkspace: (name, icon)->
      @_workspaceContainer.create(name, icon)

    removeWorkspace: (id-or-workspace)->
      @_workspaceContainer.remove(id-or-workspace)

    setActiveWorkspace: (id-or-workspace)->
      @_workspaceContainer.setActive(id-or-workspace)

    getActiveWorkspace: ->
      @_workspaceContainer.getActive!

    getWorkspace: (id-or-workspace) ->
      @_workspaceContainer.getWorkspace(id-or-workspace)
