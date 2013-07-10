/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */
qx.Theme.define("wl.be.app.theme.Decoration", {
  extend: qx.theme.modern.Decoration,
  decorations: {
    main_wrkspaces: {
      decorator: qx.ui.decoration.Background,
      style: {
        backgroundImage: 'resource/up/decoration/wrkspaces_bg.png',
        backgroundRepeat: 'repeat'
      }
    },
    main_wrkspaces_pane: {
      decorator: qx.ui.decoration.Single,
      style: {
        backgroundColor: 'main_wrkspaces_pane',
        width: [1, 0, 1, 0],
        color: 'main_wrkspaces_pane_border'
      }
    }
  }
});