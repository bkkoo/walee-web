qx.Class.define \wl.core.ui.ActivityIndicator,

  extend: qx.ui.embed.Html

  construct: !(conf) ->
    @base arguments, "<div class='indy'>1</div><div class='indy'>2</div><div class='indy'>3</div><div class='indy'>4</div><div class='indy'>5</div><div class='indy'>6</div>"
    all-conf =
      lines: 9 #The number of lines to draw
      length: 1  #The length of each line
      width: 4 #The line thickness
      radius: 6 #The radius of the inner circle
      corners: 1 #Corner roundness (0..1)
      rotate: 0 #The rotation offset
      direction: 1 #1: clockwise, -1: counterclockwise
      color: \#000 ##rgb or #rrggbb
      speed: 1.1 #Rounds per second
      trail: 44 #Afterglow percentage
      shadow: false #Whether to render a shadow
      hwaccel: true #whether to use hardware acceleration
      className: \spinner #The CSS class to assign to the spinner
      zIndex: 2e9 #The z-index (defaults to 2000000000)
      top: \auto #Top position relative to parent in px
      left: \auto #Left position relative to parent in px

    for k, v of conf
      all-conf[k] = v

    spinner = new Spinner(all-conf)
    
    @addListenerOnce \appear, (~>
      #spinner.spin @getContentElement!.getDomElement!
    )
