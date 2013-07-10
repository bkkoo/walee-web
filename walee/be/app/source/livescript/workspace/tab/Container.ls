qx.Class.define "wl.be.app.workspace.tab.Container",

  extend: qx.ui.tabview.TabView

  include:
    wl.core.view.MView

  implement:
    wl.be.app.workspace.IContainer

  construct: !(barPosition) ->
    @base(arguments, barPosition)
    @workspaces = []

  members:

    create: (name, icon)->
      workspace = new wl.be.app.workspace.tab.Workspace name, icon, @workspaces.length, @
      @workspaces.push workspace
      @add workspace
      workspace

    remove: (id-or-workspace)->
      if @getWorkspace(id-or-workspace)
        @workspaces = @workspaces.filter (-> it != that )
        @remove that
        that

    setActive: (id-or-workspace)->
      if @getWorkspace(id-or-workspace)
        @setSelection [that]
        that

    getActive: ->
      selections = @getSelection()
      if selections.length
        selections[0]

    getWorkspace: (id-or-workspace) ->
      if typeof! id-or-workspace == \Number && (that = @workspaces[id-or-workspace])
        that
      else
        if qx.Class.hasInterface(qx.Class.getByName(id-or-workspace.classname), wl.be.app.workspace.IWorkspace)
          if (that = id-or-workspace) in @workspaces
            that
          else
            throw wl.be.app.workspace.ErrWorkspaceNotExist "WorkSpace `#id-or-workspace` pass as an argument is not exist!"
        else
          throw wl.core.err.ErrWrongArg "Wrong argument! require id or object that implements IWorkspace Interface"
