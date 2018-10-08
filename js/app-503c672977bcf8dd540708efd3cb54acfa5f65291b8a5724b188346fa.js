video_timeout = false;

document.addEventListener('playing', function(e) {
  removeCaptions();

  video_timeout = setTimeout(function() {
    addErrorCaption(e.slug);
  }, 30000);
}, false);

function set_playing_state() {
  clearTimeout(video_timeout);
  removeCaptions();
}

wistiaEmbeds.bind('timechange', set_playing_state);

document.addEventListener('played', set_playing_state, false);

document.addEventListener('closed', set_playing_state, false);

function addErrorCaption(slug) {
  removeCaptions();
  $('.wistia_popover_embed').addClass('video video-error');
  logError(slug);
}

function removeCaptions() {
   $('.wistia_popover_embed').removeClass('video video-error');
}

function logError(slug) {
  $.get('/wistia_responses', {page_path: window.location.pathname, video_slug: slug});
}
;
/*!
  * Stickyfill – `position: sticky` polyfill
  * v. 2.1.0 | https://github.com/wilddeer/stickyfill
  * MIT License
  */

!function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function d(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])}function e(a){return parseFloat(a)||0}function f(a){for(var b=0;a;)b+=a.offsetTop,a=a.offsetParent;return b}function g(){function c(){a.pageXOffset!=m.left?(m.top=a.pageYOffset,m.left=a.pageXOffset,p.refreshAll()):a.pageYOffset!=m.top&&(m.top=a.pageYOffset,m.left=a.pageXOffset,n.forEach(function(a){return a._recalcPosition()}))}function d(){f=setInterval(function(){n.forEach(function(a){return a._fastCheck()})},500)}function e(){clearInterval(f)}if(!k){k=!0,c(),a.addEventListener("scroll",c),a.addEventListener("resize",p.refreshAll),a.addEventListener("orientationchange",p.refreshAll);var f=void 0,g=void 0,h=void 0;"hidden"in b?(g="hidden",h="visibilitychange"):"webkitHidden"in b&&(g="webkitHidden",h="webkitvisibilitychange"),h?(b[g]||d(),b.addEventListener(h,function(){b[g]?e():d()})):d()}}var h=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),i=!1,j="undefined"!=typeof a;j&&a.getComputedStyle?!function(){var a=b.createElement("div");["","-webkit-","-moz-","-ms-"].some(function(b){try{a.style.position=b+"sticky"}catch(a){}return""!=a.style.position})&&(i=!0)}():i=!0;var k=!1,l="undefined"!=typeof ShadowRoot,m={top:null,left:null},n=[],o=function(){function g(a){if(c(this,g),!(a instanceof HTMLElement))throw new Error("First argument must be HTMLElement");if(n.some(function(b){return b._node===a}))throw new Error("Stickyfill is already applied to this node");this._node=a,this._stickyMode=null,this._active=!1,n.push(this),this.refresh()}return h(g,[{key:"refresh",value:function(){if(!i&&!this._removed){this._active&&this._deactivate();var c=this._node,g=getComputedStyle(c),h={position:g.position,top:g.top,display:g.display,marginTop:g.marginTop,marginBottom:g.marginBottom,marginLeft:g.marginLeft,marginRight:g.marginRight,cssFloat:g.cssFloat};if(!isNaN(parseFloat(h.top))&&"table-cell"!=h.display&&"none"!=h.display){this._active=!0;var j=c.style.position;"sticky"!=g.position&&"-webkit-sticky"!=g.position||(c.style.position="static");var k=c.parentNode,m=l&&k instanceof ShadowRoot?k.host:k,n=c.getBoundingClientRect(),o=m.getBoundingClientRect(),p=getComputedStyle(m);this._parent={node:m,styles:{position:m.style.position},offsetHeight:m.offsetHeight},this._offsetToWindow={left:n.left,right:b.documentElement.clientWidth-n.right},this._offsetToParent={top:n.top-o.top-e(p.borderTopWidth),left:n.left-o.left-e(p.borderLeftWidth),right:-n.right+o.right-e(p.borderRightWidth)},this._styles={position:j,top:c.style.top,bottom:c.style.bottom,left:c.style.left,right:c.style.right,width:c.style.width,marginTop:c.style.marginTop,marginLeft:c.style.marginLeft,marginRight:c.style.marginRight};var q=e(h.top);this._limits={start:n.top+a.pageYOffset-q,end:o.top+a.pageYOffset+m.offsetHeight-e(p.borderBottomWidth)-c.offsetHeight-q-e(h.marginBottom)};var r=p.position;"absolute"!=r&&"relative"!=r&&(m.style.position="relative"),this._recalcPosition();var s=this._clone={};s.node=b.createElement("div"),d(s.node.style,{width:n.right-n.left+"px",height:n.bottom-n.top+"px",marginTop:h.marginTop,marginBottom:h.marginBottom,marginLeft:h.marginLeft,marginRight:h.marginRight,cssFloat:h.cssFloat,padding:0,border:0,borderSpacing:0,fontSize:"1em",position:"static"}),k.insertBefore(s.node,c),s.docOffsetTop=f(s.node)}}}},{key:"_recalcPosition",value:function(){if(this._active&&!this._removed){var a=m.top<=this._limits.start?"start":m.top>=this._limits.end?"end":"middle";if(this._stickyMode!=a){switch(a){case"start":d(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:this._offsetToParent.top+"px",bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"middle":d(this._node.style,{position:"fixed",left:this._offsetToWindow.left+"px",right:this._offsetToWindow.right+"px",top:this._styles.top,bottom:"auto",width:"auto",marginLeft:0,marginRight:0,marginTop:0});break;case"end":d(this._node.style,{position:"absolute",left:this._offsetToParent.left+"px",right:this._offsetToParent.right+"px",top:"auto",bottom:0,width:"auto",marginLeft:0,marginRight:0})}this._stickyMode=a}}}},{key:"_fastCheck",value:function(){this._active&&!this._removed&&(Math.abs(f(this._clone.node)-this._clone.docOffsetTop)>1||Math.abs(this._parent.node.offsetHeight-this._parent.offsetHeight)>1)&&this.refresh()}},{key:"_deactivate",value:function(){var a=this;this._active&&!this._removed&&(this._clone.node.parentNode.removeChild(this._clone.node),delete this._clone,d(this._node.style,this._styles),delete this._styles,n.some(function(b){return b!==a&&b._parent&&b._parent.node===a._parent.node})||d(this._parent.node.style,this._parent.styles),delete this._parent,this._stickyMode=null,this._active=!1,delete this._offsetToWindow,delete this._offsetToParent,delete this._limits)}},{key:"remove",value:function(){var a=this;this._deactivate(),n.some(function(b,c){if(b._node===a._node)return n.splice(c,1),!0}),this._removed=!0}}]),g}(),p={stickies:n,Sticky:o,forceSticky:function(){i=!1,g(),this.refreshAll()},addOne:function(a){if(!(a instanceof HTMLElement)){if(!a.length||!a[0])return;a=a[0]}for(var b=0;b<n.length;b++)if(n[b]._node===a)return n[b];return new o(a)},add:function(a){if(a instanceof HTMLElement&&(a=[a]),a.length){for(var b=[],c=function(c){var d=a[c];return d instanceof HTMLElement?n.some(function(a){if(a._node===d)return b.push(a),!0})?"continue":void b.push(new o(d)):(b.push(void 0),"continue")},d=0;d<a.length;d++){c(d)}return b}},refreshAll:function(){n.forEach(function(a){return a.refresh()})},removeOne:function(a){if(!(a instanceof HTMLElement)){if(!a.length||!a[0])return;a=a[0]}n.some(function(b){if(b._node===a)return b.remove(),!0})},remove:function(a){if(a instanceof HTMLElement&&(a=[a]),a.length)for(var b=function(b){var c=a[b];n.some(function(a){if(a._node===c)return a.remove(),!0})},c=0;c<a.length;c++)b(c)},removeAll:function(){for(;n.length;)n[0].remove()}};i||g(),"undefined"!=typeof module&&module.exports?module.exports=p:j&&(a.Stickyfill=p)}(window,document);
// var requestUrl = "http://ip-api.com/json",
// acceptedCookiesCookie,
// acceptedDisclaimerCookie,
// localeData,
// euList = [
//   "BE",
//   "BG",
//   "CZ",
//   "DK",
//   "DE",
//   "EE",
//   "IE",
//   "EL",
//   "ES",
//   "FR",
//   "IT",
//   "CY",
//   "LV",
//   "LT",
//   "LU",
//   "HU",
//   "MT",
//   "NL",
//   "AT",
//   "PL",
//   "PT",
//   "RO",
//   "SI",
//   "SK",
//   "FI",
//   "SE",
//   "UK"
// ];

var checkCookie = function() {
  var cookieEnabled=(navigator.cookieEnabled) ? true : false;
  if (typeof navigator.cookieEnabled=="undefined" && !cookieEnabled){
       createCookie(testCookie,momentaryTest);
       cookieEnabled=(document.cookie.indexOf("testcookie")!=-1)? true : false;
   }
   return (cookieEnabled) ? true : showCookieFail();
}

var showCookieFail = function(){
  $('.no-cookies').addClass('show');
  $('html, body').addClass('no-overflow');
}

var createCookie = function(name, value, days) {
  var expires;
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toGMTString();
  } else {
    expires = 10;
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(c_name) {
  if (document.cookie.length > 0) {
    c_start = document.cookie.indexOf(c_name + "=");
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1;
      c_end = document.cookie.indexOf(";", c_start);
      if (c_end == -1) {
        c_end = document.cookie.length;
      }
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return "";
}


// function getLocale() {
//   if (!acceptedCookiesCookie) {
//     $.ajax({
//       url: requestUrl,
//       type: 'GET',
//       success: function(json) {
//         euCheck(json.countryCode);
//       },
//       error: function(err) {
//         console.log("Request failed, error= " + err);
//       }
//     });
//   }
// }

// function euCheck(localeData) {
//   if (localeData)
//   $.inArray(localeData, euList) == -1 ? $('.app-cookies').removeClass('unaccepted') : $('.app-cookies').addClass('unaccepted');
// }


// cookies
//
var acceptedCookiesCookie = getCookie('bridgewater_com_cookies'),
    acceptedDisclaimerCookie = getCookie('bridgewater_com_accept_media_disclaimer');

// getLocale(); // For EU Check
acceptedCookiesCookie.length === 0 ? $('.app-cookies').addClass('unaccepted') : $('.app-cookies').removeClass('unaccepted');
acceptedDisclaimerCookie.length === 0 ? $('.app-media-disclaimer').addClass('unaccepted') : $('.app-media-disclaimer').removeClass('unaccepted');

// cookie actions
//
$('.app-cookies').on('click', '#cookies', function() {
  createCookie('bridgewater_com_cookies', 'accepts-cookies', 30);
  $('.app-cookies').slideToggle(400, function() {
    $(this).parent().removeClass('unaccepted');
  });
});

$('.app-media-disclaimer').on('click', '.agree', function() {
  createCookie('bridgewater_com_accept_media_disclaimer', 'accepts-disclaimer', 30);
  $('.app-media-disclaimer').fadeOut(400, function() {
    $('body').scrollTop(0);
    $(this).removeClass('unaccepted');
  });
});

checkCookie();
// Set active links on scroll when content area is reached
//
var $navLinks = $('.app-menu li a, .app-menu-mobile li a'),
    $navLinksDesktop = $('.app-menu li a');

var getSections = function () {
  return $navLinks.map(function () {
    if(this.hash) return this.hash.replace('#', '');
  }).toArray().filter(function(item, pos, self) {
    return self.indexOf(item) == pos;
  });
};

var activeNavOnScroll = function () {
  var sections = getSections() || [];
  $.each(sections, function (index, elem) {
    var section = $('[scroll-name="' + elem +'"]')[0];
    if (!section) return;

    var waypoint = new Waypoint({
      element: section,
      handler: function(direction) {
        if(isScrolling) return;
        $navLinks.removeClass('active');
        var activeWaypoint = ((direction == "down") ? this : this.previous());
        if(activeWaypoint) {
          $('a[href$=' + activeWaypoint.element.attributes['scroll-name'].value + ']').addClass('active');
        }
      },
      offset: '50%'
    });
  });

  // Remove active links if at top of page
  $(window).on('scroll', function() {
    if ($(window).scrollTop() === 0 && $('body#top').length) {
      $navLinksDesktop.removeClass('active').first().addClass('active');
    }
  });
};

activeNavOnScroll();
/**
* Make ajax calls to retrieve information
* about a users origin to aid in EU cookie
*/


function getHttpRequestObject() {
	var xmlHttpRequst = false;

	if (window.XMLHttpRequest) {
		xmlHttpRequst = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		xmlHttpRequst = new ActiveXObject("Microsoft.XMLHTTP");
	}
	return xmlHttpRequst;
}

// Does the AJAX call to URL specific with rest of the parameters
function doAjax(url, method, async, responseHandler, data) {
	url = url || "";
	method = method || "GET";
	async = async || true;
	data = data || null;

	if(url == "") {
		alert("URL can not be null/blank");
		return false;
	}
	var xmlHttpRequst = getHttpRequestObject();

	if(xmlHttpRequst != false) {
		if(method == "GET") {
			url = url + "?" + data;
			data = null;
		}
		xmlHttpRequst.open(method, url, async);
		// Set request header (optional if GET method is used)
		if(method == "POST")
		{
			xmlHttpRequst.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		}
		// Assign (or define) response-handler/callback when ReadyState is changed.
		xmlHttpRequst.onreadystatechange = responseHandler;
		// Send data
		xmlHttpRequst.send(data);
	}
	else
	{
		alert("Please use browser with Ajax support.!");
	}
}
;
/**
* A function to smoothly scroll the page to a
* specified anchor based on navigation item
* clicked.
*
* This also allows to smoothly scroll to a
* point on the home page when returning from
* an interior page.
*/


(function($) {

  function landingHash() {
    var $landing = $('a[href="/'+window.location.hash+'"]');

    if ($landing.length) {
      history.replaceState("", document.title, window.location.pathname + window.location.search);
    }
  }

  $('a[href*="#"]:not([href="#"])').click(function() {
    var offsetTop,
        bodyTop = document.documentElement.scrollTop || document.body.scrollTop;

    isScrolling = true;

    if($(this).closest('.app-menu').length) {
      $('.app-menu').find('.active').toggleClass('active');
    }

    if($(this).closest('.app-menu-mobile').length) {
      $('.app-menu-mobile').find('.active').toggleClass('active');
    }

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      var href = $(this).attr('href');

      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        offsetTop = target.offset().top;

        // Dont animate if target is already scrolled to
        if(offsetTop === bodyTop) {
          setTimeout(function () {
            isScrolling = false;
          },800);
        } else {
          $('html, body').animate({
            scrollTop: offsetTop
          }, 800, function () {
            isScrolling = false;
          });
        }
        // console.log(this.hash);
        if (this.hash == '#top') {
          $('html, body').animate({
            scrollTop: 0
          }, 800, function () {
            isScrolling = false;
          });
        }

        $(this).toggleClass('active');
        $('.site-menu.fade-in:visible').length ? $('.menu-button-js').trigger('click') : {}
        return false;
      }
    }
  });

  $(window).on('load', function() {
    landingHash();
  });

})(jQuery);
var menuButton          = '.menu-button-js',
    overlayNav          = '.cd-overlay-nav',
    overlayContent      = '.cd-overlay-content',
    navigation          = '.site-menu',
    smallScreenClass    = 'js-small-screen',
    smallScreenSelector = '.js-small-screen',
    appHeader           = '.app-header',
    appTitle            = '.app-title',
    navPlaceholder      = '.js-nav-placeholder',
    overlaySpeed        = 300,
    body                = $('body'),
    noScrollClass       = 'active-menu',
    profileTitle        = $('.profile-title');
    appTitle            = $('.app-title');
    appTitleE           = $('.app-title h1');

layerInit();

$(window).on('resize', function(){

  if(!body.hasClass(noScrollClass)) {
    window.requestAnimationFrame(layerInit);

    $(menuButton).removeClass('fade-in');
    $(menuButton).removeClass('active');
  }

});

$(menuButton).click(function(e) {
     e.preventDefault();

    var self          = $(this),
        nav           = $(navigation);

    body.hasClass(noScrollClass) ? body.removeClass(noScrollClass) : body.addClass(noScrollClass)

    if (!self.hasClass('active')) {
      self.finish().addClass('active');

      $(overlayNav).finish().children('span').velocity({
        translateZ: 0,
        scaleX    : 1.1,
        scaleY    : 1.1,
      }, overlaySpeed, 'easeInCubic');

      nav.finish().addClass('fade-in');
    }
    else {
      self.finish().removeClass('active');

      $(overlayNav).finish().children('span').velocity({
        translateZ: 0,
        scaleX    : 0,
        scaleY    : 0,
      }, overlaySpeed, 'easeInCubic');

      nav.finish().removeClass('fade-in');
    }
});

function bpManager(){
  var
    headerHeight = 90,
    vw = $( window ).width();

  if (profileTitle) {
    headerHeight = 90;
  }

  if(appTitleE.length === 0) {
    appTitle.css({
      'display': 'none',
      'height': 0,
      'padding': 0
    });

    headerHeight = 90;
  }

  if (vw < 672) {
    $(navPlaceholder).css({
        'height': headerHeight +$(appTitle).outerHeight()
      }, 0
    );
  } else {
    $(navPlaceholder).css({
        'height': 0
      }, 0
    );
  }
}

function layerInit(){
  var diameterValue = (Math.sqrt( Math.pow($(window).height(), 2) + Math.pow($(window).width(), 2))*2);
  $(overlayNav).children('span').velocity({
    scaleX: 0,
    scaleY: 0,
    translateZ: 0,
  }, 50).velocity({
    height: diameterValue+'px',
    width : diameterValue+'px',
    top   : -(diameterValue / 2)+'px',
    left  : -(diameterValue / 2)+'px',
  }, 0);

  $(overlayContent).children('span').velocity({
    scaleX: 0,
    scaleY: 0,
    translateZ: 0,
  }, 500).velocity({
    height : diameterValue+'px',
    width : diameterValue+'px',
    top : -(diameterValue/2)+'px',
    left : -(diameterValue/2)+'px',
  }, 500);
}
;
/**
* Special code required for Temporary Campus
* pages to operate.
*/


(function($){
  $('.agree-terms-link').on('click', function(e) {
    e.preventDefault();

    freezeBodyScroll();
    $('body').addClass('modal-active');
    $('.agree-apply.modal-wrapper, .modal-content#agree-terms-modal').addClass('active');

  });

  var freezeBodyScroll = function() {
    var bodyTop = $('body').scrollTop();

    $('body').css('top', -bodyTop).attr('data-original', bodyTop);
  };

  $('.agree-terms-modal .table-of-contents a').click( function() {
    var hash = $(this).attr('href'),
    hashPosition = ($(hash).offset().top - $('.agree-terms-modal-wrapper').offset().top);

    $('#agree-terms-modal').animate( { scrollTop: hashPosition + 25 }, 500);

  });

  // Questions modal
  //
  $('.questions ul').on('click', 'a', function(e) {
    e.preventDefault();

    var $this = $(this),
    $thisModal = $this.data('modal');

    $('.questions ul a').removeClass('hover');

    $('.questions, .questions .modal-wrapper, .modal-content#' + $thisModal + '').addClass('active');
  });
  // Continue without desktop email client modal


  //need to explicitly add hover because of modal overlay weirdness
  //
  $('.questions ul').on('mouseover', 'a', function() {
    $(this).addClass('hover');
  });

  $('.questions ul').on('mouseout', 'a', function() {
    $(this).removeClass('hover');
  });

  var hideTerms = function() {
    var bodyTop = $('body').data('original');

    $('body').removeAttr('style').removeClass('modal-active').scrollTop(bodyTop).attr('data-original', 0);
    hideModal();
  };

  var hideModal = function() {
    $('.questions, .modal-wrapper, .modal-content.active').removeClass('active');
  };

  $('.questions .modal, .cycle-apply .modal').on('click', '.icon-close-menu', function() {
    hideModal();
  });

  $('.questions .overlay').click(function() {
    hideModal();
  });

})(jQuery);
(function() {
  var width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;

  // Main
  if(document.getElementById('family-header')) {
    initHeader();
    initAnimation();
    addListeners();
  }

  function initHeader() {

    width = 1600; // window.innerWidth;
    height = 392; // window.innerHeight;
    target = {x: -100, y: -100};
    var pointDensity = 15;

    largeHeader = document.getElementById('family-header');
    largeHeader.addEventListener('mousemove', function(event) {
      var x = event.pageX - $('.family-header').offset().left;
      var y = event.pageY - $('.family-header').offset().top;
      var x2 = 50 + x / 100;
      var y2 = 50 + y / 150;
      largeHeader.style.backgroundPosition = x2 + '% ' + y2 + '%';
    });

    largeHeader.style.height = height + 'px';

    canvas = document.getElementById('family-canvas');
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext('2d');

    // create points
    points = [];
    for(var x = 0; x < width; x = x + width / pointDensity) {
      for(var y = 0; y < height; y = y + height / pointDensity) {
        var px = x + Math.random() * width / pointDensity;
        var py = y + Math.random() * height / pointDensity;
        var p = {x: px, originX: px, y: py, originY: py };
        points.push(p);
      }
    }

    var nearPointCount = 4;

    // for each point find the 5 closest points
    for(var i = 0; i < points.length; i++) {
      var closest = [];
      var p1 = points[i];
      for(var j = 0; j < points.length; j++) {
        var p2 = points[j];
        if(!(p1 == p2)) {
          var placed = false;
          for(var k = 0; k < nearPointCount; k++) {
            if(!placed) {
              if(closest[k] == undefined) {
                closest[k] = p2;
                placed = true;
              }
            }
          }

          for(k = 0; k < nearPointCount; k++) {
            if(!placed) {
              if(getDistance(p1, p2) < getDistance(p1, closest[k])) {
                closest[k] = p2;
                placed = true;
              }
            }
          }
        }
      }
      p1.closest = closest;
    }

    // assign a circle to each point
    for(i in points) {
      var c = new Circle(points[i], 2 + Math.random() * 2, 'rgba(255,255,255,0.1)');
      points[i].circle = c;
    }
  }

  // Event handling
  function addListeners() {
    if(!('ontouchstart' in window)) {
      document.addEventListener('mousemove', mouseMove);
    }
    window.addEventListener('resize', resize);
    resize();
  }

  function mouseMove(e) {
    var posy = 0;
    var posx = 0;
    if (e.pageX || e.pageY) {
      posx = e.pageX - $('.family-header').offset().left;
      posy = e.pageY - $('.family-header').offset().top;
    }
    else if (e.clientX || e.clientY) {
      posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    target.x = posx;
    target.y = posy;
  }

  function resize() {
    width = $('.family-header').width();
    height = $('.family-header').height();
    canvas.width = width;
    canvas.height = height;
  }

  // animation
  function initAnimation() {
    animate();
    for(var i in points) {
      shiftPoint(points[i]);
    }
  }

  function animate() {

    if(animateHeader) {
      ctx.clearRect(0, 0, width, height);
      for(var i in points) {
        // detect points in range
        if(Math.abs(getDistance(target, points[i])) < 2000) {
          points[i].active = 0.3;
          points[i].circle.active = 0.5;
        } else if(Math.abs(getDistance(target, points[i])) < 10000) {
          points[i].active = 0.1;
          points[i].circle.active = 0.2;
        } else if(Math.abs(getDistance(target, points[i])) < 20000) {
          points[i].active = 0.05;
          points[i].circle.active = 0.1;
        } else {
          points[i].active = 0;
          points[i].circle.active = 0.05;
        }

        drawLines(points[i]);
      }

      // batch drawing circles now
      var circleOpacities = [ 0.5, 0.3, 0.1, 0.05 ];

      for(var o in circleOpacities) {
        ctx.fillStyle = 'rgba(145,164,189,' + circleOpacities[o] + ')';
        ctx.beginPath();

        for(var i in points) {
          if(points[i].circle.active == circleOpacities[o]) {
            points[i].circle.draw();
          }
        }

        ctx.fill();
      }

    }

    requestAnimationFrame(animate);
  }

  function shiftPoint(p) {
    TweenLite.to(p, 1 + 1 * Math.random(), {x: p.originX - 50 + Math.random() * 100,
      y: p.originY - 50 + Math.random() * 100, ease: Circ.easeInOut,
      onComplete: function() {
      shiftPoint(p);
    }});
  }

  // Canvas manipulation
  function drawLines(p) {

    if(!p.active) return;
    for(var i in p.closest) {
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.closest[i].x, p.closest[i].y);
      ctx.strokeStyle = 'rgba(145,164,189,'+ p.active+')';
      ctx.stroke();
    }

  }

  function Circle(pos,rad,color) {
    var _this = this;

    // constructor
    (function() {
      _this.pos = pos || null;
      _this.radius = rad || null;
      _this.color = color || null;
    })();

    this.draw = function() {
      if(!_this.active) return;
      ctx.moveTo(_this.pos.x, _this.pos.y);
      ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
    };
  }

  // Util
  function getDistance(p1, p2) {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
  }

})();
/*jslint browser:true*/

(function($){
  video_timeout = false;
  video_current_time = {};

  window._wq = window._wq || [];
  _wq.push({ id: "_all", onReady: function(video) {

    video.on('popovershow', function() {
      document.ontouchmove = function(event){
        event.preventDefault();
      }
      window.onmousewheel = function (event) {
        event.preventDefault();
      }

      video.time(video_current_time[video._hashedId]);

      removeCaptions();

      video_timeout = setTimeout(function() {
        addErrorCaption(video.params.pageUrl.split('/').slice(-1).pop());
      }, 30000);

    });

    video.on('timechange', function(t) {
      video_current_time[video._hashedId] = t;
      set_playing_state();
    });

    video.on('end', function() {
      delete video_current_time[video._hashedId];
      if (video.params.pageUrl.split('/').slice(-1).pop() === "the_challenge") {
        $('#feedback-widget').foundation('reveal', 'open');
      }
      video.popover.hide();
    });

    video.on('popoverhide', function() {
      set_playing_state();
      window.onmousewheel = null;
      document.ontouchmove = function(event){ }
    });

    video.on('play', set_playing_state);
  }});

  $(function() {
    $(document).on('click', '.embedded-link, a.thumbnail, #awards_list a', function() {
      $(this).addClass('viewed');
    });
  });
}(window.jQuery));
var autoplaying, autoplayit, element, playit, window_hash;

autoplaying = function() {
  return element().length > 0;
};

window_hash =  {
  value: function () {
    return window.location.hash.replace('#', '');
  }
};

element = function() {
  return $("a[href$='" + (window_hash.value()) + "'][data-magnet-reveal-id='video-reveal']");
};

playit = function() {
  element().click();
  return window.location.hash = '';
};

autoplayit = function() {
  window.setTimeout((function() {
    playit();
  }), 500);
};

$(function() {
  if (autoplaying()) {
    autoplayit();
  }
});
/*jslint browser: true */
/*global $, wistiaEmbeds */


function defaultVideoEndCallback() {
  $('.reveal-modal').foundation('reveal', 'close');
}

wistiaEmbeds.onFind(function(video) {
  video.bind("end", defaultVideoEndCallback);

  var feedback = $('.three-paths-choice');
  if (feedback.length > 0) {
    video.unbind("end", defaultVideoEndCallback);
    video.bind("end", function() {
      theChallengeVideoEndCallback(feedback);
    });
  }
});
/*jslint browser: true */
/*global $, wistiaEmbeds */


wistiaEmbeds.onFind(function(video) {
  path = window.location['pathname']; //current path on site
  modal = $(".reveal-modal");
  new VideoSegmentBinder(video, path, modal).setup();
});

function VideoSegmentBinder(video, path, modal) {
  this.setup = function() {
    var wistiaId = video.hashedId(); //wistia id

    var videoSegments = new VideoSegments(wistiaId, path)

    video.bind('timechange', function(time) {
      videoSegments.addTimeEvent(time, video.state());
    });

    var closeSegment = function() {
      videoSegments.setDuration(video.duration());
      videoSegments.closeSegment();
    };

    video.bind('play', closeSegment);
    video.bind('end', closeSegment);
    video.bind('pause', closeSegment);
    video.bind('seek', closeSegment);
    modal.bind('close', closeSegment);
  };
};

function VideoSegments(wistiaId, path) {
  var wistiaId = wistiaId;
  var path = path;
  var timings = [];
  var duration = null;

  this.setDuration = function(duration_ts) {
    duration = duration_ts;
  }

  this.addTimeEvent = function(time, state) {
    if (state == 'playing') {
      timings.push(time);
    }
  }

  this.closeSegment = function() { }

  function startTime() {
    return timings[0];
  };

  function endTime() {
    return timings[timings.length - 1];
  };

}
;
(function($){
  // BUMPS
  isScrolling = false;

  // carousel options
  //
  $('.slider').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,
    smartSpeed: 1250,
    navText: ['<span class="visuallyhidden">prev</span>', '<span class="visuallyhidden">next</span>'],
    navClass: ['owl-prev icon-arrow-prev', 'owl-next icon-arrow-next']
  });

  $('.subpage-slider').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: false,
    autoplay: false,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,
    smartSpeed: 1750,
    responsive: {
      768: {
        nav: true,
        navText: ['<span class="icon-arrow-prev"></span>','<span class="icon-arrow-next"></span>']
      }
    }
  });

  $('.cards:not(.ma-portal-community)').owlCarousel({
    autoplay: false,
    center: false,
    dots: false,
    loop: true,
    margin: 0,
    nav: true,
    stagePadding: 0,
    navText: ['<span class="icon-arrow-prev"></span>','<span class="icon-arrow-next"></span>'],
    responsive: {
      0: {
          center: true,
          items: 1,
          margin: 0,
          dots: true,
          nav: false,
          mouseDrag: true,
          touchDrag: true,
      },
      768: {
          center: true,
          items: 2,
          margin: 15,
          mouseDrag: true,
          touchDrag: true,
      },
      1120: {
          items: 3,
          loop: false,
          margin: 15,
          nav: false,
          mouseDrag: false,
          touchDrag: false,
      }
    }
  });

  $('.media-slider').owlCarousel({
    autoplay: false,
    center: false,
    dots: true,
    loop: true,
    margin: 0,
    nav: false,
    stagePadding: 0,
    responsive: {
      0: {
          center: true,
          items: 1,
          margin: 0,
          mouseDrag: true,
          touchDrag: true,
      },
      1120: {
          center: true,
          items: 1,
          margin: 20,
          mouseDrag: true,
          touchDrag: true,
      }
    }
  });


  // Make all external links open in a new tab/window
  //
  var setExternalLinks = function () {
    $('a[href^="http://"], a[href^="https://"], a[href*="pdf"]').attr('target','_blank');
  };

  setExternalLinks();


  $('.expander-trigger').click(function(){
    $(this).toggleClass("expander-hidden");
  });

})(jQuery);

// Character Limit for Mad Lib
//
function textCounter(field, field2, maxlimit) {
  var countfield = document.getElementById(field2);

  ( field.value.length > maxlimit ) ? countfield.className = "projectmax" : countfield.className = "projectmax visible";
  ( field.value.length > maxlimit - 10 ) ? countfield.className = "projectmax visible limits" : countfield.className = "projectmax visible";

  if ( field.value.length > maxlimit ) {
    field.value = field.value.substring( 0, maxlimit );
    return false;
  } else {
    countfield.value = maxlimit - field.value.length;
    if( field.value.length == 0 )
      countfield.className = "projectmax";
  }
}

// Get queryString parameters for external media downloadgate
//
function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$(window).on('resize load', function() {
  $('.wistia_embed').attr('id', null);
});

function isElementInViewport(el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }

  var rect = el.getBoundingClientRect();

  return (rect.bottom >= 0 && rect.right >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.left <= (window.innerWidth || document.documentElement.clientWidth));
}

var elements = $('.sticky');
Stickyfill.add(elements);
/**
* A function to filter-type media items by year entered
* from within the perchs content management system.
*/


function sorta(a, b){
  return ($(b).data('year')) < ($(a).data('year')) ? 1 : -1;
}

function kinda(a, b){
  return ($(b).data('year')) > ($(a).data('year')) ? 1 : -1;
}

setTimeout(function(){
  var items = [];
  $('[data-type]').each(function(y) {
    items[y] = $(this).data('type');
  });

  $($.unique(items)).each(function(i, y) {
    $('#filter-type').append('<span data-select='+y+'>'+y+'</span>')
  });
}, 100);

$('#filter-type').on('click', 'span', function() {
 var $type = $(this).data('select');

 // ($type === 'featured') ? $('.item').sort(sorta).appendTo('.items') : $('.item').sort(kinda).appendTo('.items');

 $('span').removeClass('active');
 $(this).addClass('active');

 $('[data-type]').hide();

 if($type == "all") {
   $('[data-type]').show();
 } else {
   $('[data-type^="'+$type+'"]').show();
 }
});

// Trigger initial change to select most recent year
setTimeout(function(){
  $('#filter-type').find('span:first').trigger('click');
}, 105);
/**
* A function to filter-year media items by year entered
* from within the perchs content management system.
*/


setTimeout(function(){
  var items = [];
  $('[data-year]').each(function(y) {
    items[y] = $(this).data('year').slice(0,4);
  });

  $($.unique(items)).each(function(i, y) {
    $('#filter-year').append('<option value='+y+'>'+y+'</option>')
  });
}, 500);

$('#filter-year').change(function() {
 var $year = $(this).val();

 $('[data-year]').hide();

 if($year == "all") {
   $('[data-year]').show();
 } else {
   $('[data-year^="'+$year+'"]').show();
 }
});

// Trigger initial change to select most recent year
$('#filter-year').find('option:first').trigger('change');

// Removes duplicates added by the Featured tab
var seen = {};
$('.media-archive .item').each(function() {
  var txt = $(this).data('href');
  if (seen[txt])
    $(this).remove();
  else
    seen[txt] = true;
});
(function ($) {
  $(window).load(function() {
    $('.family-icon').mouseenter(function(){
      $(this).addClass('hover');

    });
    $('.family-icon').mouseleave(function(){ $(this).removeClass('hover'); });

    var opening = false;
    var closing = false;

    var openPanel = function(slug) {
      $('.icons').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', '#' + slug,
      function() {
        if (opening) {
          $('.icons').addClass('hide');
          $('.family-icon').addClass('hide');
          $('#panel-' + slug).removeClass('hide');
          $('#panel-' + slug).removeClass('fade');
          closing = false;
          opening = false;
        }
      });
    };

    $('.family-icon').on('click', function(event){
      event.stopPropagation();
      $('.family-icon').removeClass('hover');
      $('.icons').addClass('fade');
      $('.family-icon').addClass('fade');
      opening = true;
      closing = false;
      openPanel(event.currentTarget.id);
    });

    var closePanels = function() {
      $('.explore-panel').addClass('fade');
      $('.explore-panel').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
      function() {
        if (closing) {
          $('.explore-panel').addClass('hide');
          $('.icons').removeClass('hide');
          $('.family-icon').removeClass('hide');
          $('.icons').removeClass('fade');
          $('.family-icon').removeClass('fade');
        }
        closing = false;
        opening = false;
      });
    };

    $('.family-header .icon-close-menu').on('click', function(event){
      event.stopPropagation();
      closing = true;
      closePanels();
    });

    $(document).keyup(function(e) {
      if (e.keyCode == 27) { // ESC key
        closing = true;
        closePanels();
      }
    });

    $(document).click(function(event) {
      if ($(event.target).parents('.explore-panel').length === 0) {
        closing = true;
        closePanels();
      }
    });
  });

})(jQuery);
(function($) {

	var stickyTop = 0,
    	scrollTarget = false,
      timeline = $('.timeline-nav'),
      items = $('.point', timeline),
			labels = $('.label', timeline),
      milestones = $('.timeline-section .milestone'),
      offsetTop = parseInt(timeline.css('top'));

	if(timeline.length == 0) {
    return;
	}

  // Resize
  $(window).resize(function () {
		timeline.removeClass('fixed');
		stickyTop = timeline.offset().top - offsetTop;
		$(window).trigger('scroll');
	}).trigger('resize');


	items.click(function () {
		var circle = $(this),
    		index = circle.index(),
		    milestone = milestones.eq(index);

		if (!circle.hasClass('active') && milestone.length) {
			scrollTarget = index;

			var scrollTargetTop = milestone.offset().top - 130;

			$('html, body').animate({ scrollTop: scrollTargetTop }, {
				duration: 400,
				complete: function complete() {
					scrollTarget = false;
        }
      });
		}
	});


	$(window).scroll(function () {
		var viewLine = $(window).scrollTop() + $(window).height() / 2,
		    active = -1;

		if (scrollTarget === false) {
			milestones.each(function () {
				if ($(this).offset().top - viewLine > 0) {
					return false;
				}
				active++;
			});
		} else {
			active = scrollTarget;
		}

		$('#debt-chart-fill').attr('points', timelineCoords.slice(0, active + 1));
		items.filter('.active').removeClass('active');
		items.eq(active != -1 ? active : 0).addClass('active');
		labels.filter('.active').removeClass('active');
    if ( items.filter('.active').length == 0 ) {
			$('.point:last-child').addClass('active');
		}
		labels.eq(active != -1 ? active : 0).addClass('active');
	}).trigger('scroll');

})(jQuery);
(function($) {

	var stickyTop = 0,
    	scrollTarget = false,
      supercycle = $('.supercycle-nav'),
      cycleItems = $('.cycle-line', supercycle),
      cycleMilestones = $('.supercycle-section .milestone'),
      cycleOffsetTop = parseInt(supercycle.css('top'));

	if(supercycle.length == 0) {
		return;
	}

  // Resize
  $(window).resize(function () {
		supercycle.removeClass('fixed');
		stickyTop = supercycle.offset().top - cycleOffsetTop;
		$(window).trigger('scroll');
	}).trigger('resize');


  // Scroll
  // $(window).scroll(function () {
  //   (isElementInViewport($('.supercycle-section'))) ? supercycle.addClass('fixed') : supercycle.removeClass('fixed');
	// }).trigger('scroll');


	$(window).scroll(function () {
    var viewLine = $(window).scrollTop() + $(window).height() / 5;

		if (scrollTarget === false) {
			cycleMilestones.each(function () {
        if ($(this).offset().top - viewLine > 0 - $(this).height() / 2.5) {
          var highlightLine = $(this).attr('class').split(/\s+/)[1];
          $('#super-cycle').attr('class', '').addClass(highlightLine);
					return false;
        }
			});
    }
	}).trigger('scroll');

})(jQuery);
var MANAGERS_MODAL_SCROLL_POSITION = 0;

(function($) {
  $('.profile-card *').on('click', function(e) {
    e.stopPropagation();
    e.preventDefault();

    MANAGERS_MODAL_SCROLL_POSITION = window.pageYOffset;

    var $modal = $( $(this).closest('.profile-card').find('a').attr('href') );


    $modal.addClass('active');
    $('body').addClass('modal-active');
  });

  $(document).on('keyup', function(e) {
    if ( e.keyCode == 27 ) {
      $('.profile-modal .icon-close-menu').trigger('click');
    }
  });

  $('.profile-modal .icon-close-menu').on('click', function(e) {
    $('.profile-modal.active').removeClass('active');
    $('body').removeClass('modal-active');

    window.scrollTo(0, MANAGERS_MODAL_SCROLL_POSITION)
  });

  // move dom around for mobile responsive design

})(jQuery);
// our modules




















;
