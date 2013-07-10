/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */
qx.Theme.define("wl.core.theme.Appearance", {
  extend: qx.theme.modern.Appearance,
  appearances: {
    "main-app-logo": {
      style: function(){
        return {
          padding: 5
        };
      }
    },
    "main-panel": {
      style: function(){
        return {
          backgroundColor: 'main-panel-bg',
          padding: [0, 0, 0, 7],
          height: 31
        };
      }
    },
    "main-sideKick": {
      style: function(){
        return {
          backgroundColor: 'main-sideKick-bg',
          minWidth: 150
        };
      }
    },
    "main-wrkspaces": {
      alias: 'tabview',
      style: function(){
        return {
          margin: [0, 0, 1, 0]
        };
      }
    },
    "tabview-page/button": {
      style: function(states){
        var useCss, ref$, decorator, padding, marginTop, marginBottom, marginLeft, marginRight;
        useCss = all(function(it){
          return qx.core.Environment.get(it);
        }, ['css.borderradius', 'css.boxshadow', 'css.gradient.linear']);
        ref$ = [0, 0, 0, 0, 0, 0], decorator = ref$[0], padding = ref$[1], marginTop = ref$[2], marginBottom = ref$[3], marginLeft = ref$[4], marginRight = ref$[5];
        if (states.checked) {
          if (states.barTop) {
            decorator = 'tabview-page-button-top-active';
            padding = [3, 4, 3, 4];
            marginLeft = states.firstTab
              ? -1
              : -3;
            marginRight = states.lastTab
              ? -1
              : -1;
            marginTop = 3;
          } else if (states.barBottom) {
            decorator = 'tabview-page-button-bottom-active';
            padding = [2, 4, 4, 4];
            marginLeft = states.firstTab
              ? 0
              : -2;
            marginRight = states.lastTab
              ? 0
              : -1;
            marginTop = 3;
            marginBottom = 5;
          } else if (states.barRight) {
            decorator = 'tabview-page-button-right-active';
            padding = [4, 5];
            marginTop = states.firstTab
              ? 0
              : -2;
            marginBottom = states.lastTab
              ? 0
              : -2;
            marginLeft = 2;
          } else {
            decorator = 'tabview-page-button-left-active';
            padding = [4, 5];
            marginTop = states.firstTab
              ? 0
              : -2;
            marginBottom = states.lastTab
              ? 0
              : -2;
          }
        } else {
          if (states.barTop) {
            decorator = 'tabview-page-button-top-inactive';
            padding = [1, 4, 3, 4];
            marginTop = 5;
            marginLeft = states.firstTab
              ? 1
              : -1;
            marginRight = 1;
          } else if (states.barBottom) {
            decorator = 'tabview-page-button-bottom-inactive';
            padding = [1, 4, 2, 4];
            marginBottom = 7;
            marginLeft = states.firstTab
              ? 1
              : -1;
            marginRight = 1;
            marginTop = 4;
          } else if (states.barRight) {
            decorator = 'tabview-page-button-right-inactive';
            padding = [4, 5];
            marginRight = 5;
            marginTop = states.firstTab
              ? 5
              : -1;
            marginBottom = -1;
            marginLeft = 3;
          } else {
            decorator = 'tabview-page-button-left-inactive';
            padding = [4, 5];
            marginLeft = 5;
            marginTop = states.firstTab ? 5 : 1;
            marginBottom = -1;
            marginRight = 1;
          }
        }
        if (decorator && useCss) {
          decorator += "-css";
        }
        return {
          zIndex: states.checked ? 10 : 5,
          decorator: decorator,
          padding: padding,
          marginTop: marginTop,
          marginBottom: marginBottom,
          marginLeft: marginLeft,
          marginRight: marginRight,
          textColor: states.disabled
            ? 'text-disabled'
            : states.checked ? 'black' : 'text-inactive'
        };
      }
    }
  }
});