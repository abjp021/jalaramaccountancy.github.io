// Navbar

// Animated Counter 

function visible(partial) {
    var $t = partial,
        $w = jQuery(window),
        viewTop = $w.scrollTop(),
        viewBottom = viewTop + $w.height(),
        _top = $t.offset().top,
        _bottom = _top + $t.height(),
        compareTop = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));

}

$(window).scroll(function(){

  if(visible($('.count-digit')))
    {
      if($('.count-digit').hasClass('counter-loaded')) return;
      $('.count-digit').addClass('counter-loaded');
      
$('.count-digit').each(function () {
  var $this = $(this);
  jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
    duration: 5000,
    easing: 'swing',
    step: function () {
      $this.text(Math.ceil(this.Counter));
    }
  });
});
    }
})

// Disable ctrl, u, F12 keys

function mousehandler(e) {
      var myevent = (isNS) ? e : event;
      var eventbutton = (isNS) ? myevent.which : myevent.button;
      if ((eventbutton == 2) || (eventbutton == 3)) return false;
  }
  document.oncontextmenu = mischandler;
  document.onmousedown = mousehandler;
  document.onmouseup = mousehandler;
  function disableCtrlKeyCombination(e) {
    var forbiddenKeys = new Array("a", "s", "c", "x","u");
    var key;
    var isCtrl;
      if (window.event) {
        key = window.event.keyCode;
          //IE
          if (window.event.ctrlKey)
              isCtrl = true;
          else
              isCtrl = false;
      }
      else {
        key = e.which;
          //firefox
          if (e.ctrlKey)
              isCtrl = true;
          else
              isCtrl = false;
      }
      if (isCtrl) {
        for (i = 0; i < forbiddenKeys.length; i++) {
          //case-insensitive comparation
          if (forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase()) {
            return false;
          }
        }
      }
      return true;
    }


/* When your mouse cursor enter the background, the fading won't pause and keep playing */ 
