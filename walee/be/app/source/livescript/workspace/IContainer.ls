qx.Interface.define "wl.be.app.workspace.IContainer",

  members:

    create: (name)-> "return workspace"
    remove: (id-or-wrkspace)-> "return workspace"
    setActive: (id-or-wrkspace)-> "return workspace"
    getActive: -> "return workspace"
    getWorkspace: (id-or-wrkspace)-> "return workspace"
