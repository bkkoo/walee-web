qx.Class.define('wl.core.ui.ActivityIndicator', {
  extend: qx.ui.embed.Html,
  construct: function(conf){
    var allConf, k, v, spinner, this$ = this;
    this.base(arguments, "<div class='indy'>1</div><div class='indy'>2</div><div class='indy'>3</div><div class='indy'>4</div><div class='indy'>5</div><div class='indy'>6</div>");
    allConf = {
      lines: 9,
      length: 1,
      width: 4,
      radius: 6,
      corners: 1,
      rotate: 0,
      direction: 1,
      color: '#000',
      speed: 1.1,
      trail: 44,
      shadow: false,
      hwaccel: true,
      className: 'spinner',
      zIndex: 2e9,
      top: 'auto',
      left: 'auto'
    };
    for (k in conf) {
      v = conf[k];
      allConf[k] = v;
    }
    spinner = new Spinner(allConf);
    this.addListenerOnce('appear', function(){});
  }
});