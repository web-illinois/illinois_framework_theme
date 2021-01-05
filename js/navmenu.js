jQuery(function ($) {

  // click anywhere on the site besides the #basic-addon1 div and children
  $('body.desktop').on("click touch", function(e){
    if(!$(e.target).closest('#mainnav').length) {
      $('#mainnav > ul > li.show').removeClass("show");
      $('#mainnav > ul > li > div.dropdown-menu.show').removeClass("show");
    }
  });

  // first level main navigation requires a click action to display links
  $("#mainnav > ul > li a[href^='#']").click(function (e) {
    e.preventDefault();
      $("#mainnav > ul > li a").not($(this)).parent().find('div').removeClass('show');
      $("#mainnav > ul > li a").not($(this)).parent().removeClass('show');
      $(this).parent().find('div').toggleClass('show');
      $(this).parent().toggleClass('show');
      $(this).attr('aria-expanded', function(_, attr) { return !(attr == 'true') });
   });

  // mainnav toggle handler for mobile menu simple menu
  $("#navbar-toggler").click(function (e) {
    $(this).attr('aria-expanded', function(_, attr) { return !(attr == 'true') });
    if ($("#mainnav").hasClass("show")) {
      $("#mainnav").removeClass("show");
    } else {
      $("#mainnav").addClass("show");
    }
    $("body").toggleClass("navopen");
  });

  $("button.tb-megamenu-button").click(function (e) {
    $(this).attr('aria-expanded', function(_, attr) { return !(attr == 'true') });
    $("body").toggleClass("navopen");
  });

  // var handleKeyboard = function(mm_timeout) {
    $("#block-sitetheme-main-menu").on('keydown', function(event) {

      // Hide the menu quickly without animating. This is triggered when
      // pressing the ESC key.
      var hideMenuFast = function() {
        $('#block-sitetheme-main-menu').find('.dropdown-toggle').attr('aria-expanded', 'false');
        $('#block-sitetheme-main-menu').find('.nav-item').removeClass('show');
        $('#block-sitetheme-main-menu').find('.dropdown-menu').removeClass('show');
      }
      // ESC
      if (event.keyCode == 27) {
        hideMenuFast($(this), 100)
        return;
      }

      // Right arrow
      if (event.keyCode == 39) {
        var $openItem = $('#block-sitetheme-main-menu').find('li.menu-item--level-1.show');
        if ($openItem.length === 0) {
          $openItem = $('#block-sitetheme-main-menu').find('a:focus, span:focus').closest('.menu-item--level-1');
        }
        var $nextItem = $openItem.next('li.menu-item--level-1');
        hideMenuFast($openItem, 100);
        if ($nextItem.length > 0) {
          $nextItem.children('a, span').focus();
        }
        return;
      }

      // Left arrow
      if (event.keyCode == 37) {
        var $openItem = $('#block-sitetheme-main-menu').find('li.menu-item--level-1.show');
        if ($openItem.length === 0) {
          $openItem = $('#block-sitetheme-main-menu').find('a:focus, span:focus').closest('.menu-item--level-1');
        }
        var $nextItem = $openItem.prev('li.menu-item--level-1');
        hideMenuFast($openItem, 100);
        if ($nextItem.length > 0) {
          $nextItem.children('a, span').focus();
        }
        return;
      }
    });

  // TODO: programmatically make all dropdowns open to the left if less than 250px from right side of the screen
  // add right class to simple menu dropdowns if they are too close to right edge of window
  // $("#mainnav-simple > ul > li").each(function (i) {
  //   if ($(window).width() - $(this).position().left < 250) {
  //     $(this).addClass("right");
  //   }
  // });

  // add active link class on simple menu
  $("#block-sitetheme-main-menu li.active section li a.nav-link").each(function(){
    var pathname = window.location.pathname;
    var hash = window.location.hash;
    if($(this).attr('href') == pathname+hash) {
      $(this).addClass('active-link');
    }
  });
  $("#block-mainnavigation li.active-trail a").each(function(){
    var pathname = window.location.pathname;
    var hash = window.location.hash;
    //console.log(pathname);
    if($(this).attr('href') == pathname+hash) {
      $(this).addClass('active-link');
    }
  });
  // Mega Menu Testing/Coding Uncomment to do CSS code dropdown
  //$("#block-mainnavigation li.tb-megamenu-item[data-label='About']").css("display", "block !important");
});


//   //aces style menu hover
//   $("#mainnav > ul.navbar-nav > li").hover(function () {
//     // e.preventDefault();
//     // $("#mainnav > ul.navbar-nav > li.dropdown a").parent().removeClass('show');
//     // $("#mainnav > ul.navbar-nav > li.dropdown a").parent().find('div').removeClass('show');
//     $(this).toggleClass('show');
//     $(this).find('a').attr('aria-expanded', true);
//
//     /* expandotile hash links, aria-controlled hash links */
//     $(this).find('div').toggleClass('show');
//
//   }, function(){
//       $(this).toggleClass('show');
//     $(this).find('div').toggleClass('show');
//     $(this).find('a').attr('aria-expanded', false);
//   });
// });
