qx.Class.define "wl.be.app.workspace.tab.Workspace",

  extend: qx.ui.tabview.Page

  implement:
    wl.be.app.workspace.IWorkspace

  construct: !(name, icon, id, container)->
    @base(arguments, name, icon)
    @_id = id
    @_name = name
    @_myContainer = container

  members:

    getMyContainer: -> @_myContainer
    getId: -> @_id
    getContainer: -> @
