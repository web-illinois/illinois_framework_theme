(function($) {
  checkDimensions();
  // Check window dimensions and apply class desktop or mobile to the body
  // of the document for easy css targeting
  function checkDimensions() {
    var w=window;
    var d=document;
    var e=d.documentElement;
    var g=d.getElementsByTagName('body')[0];
    var x=w.innerWidth||e.clientWidth||g.clientWidth;
    if (x >= 980) {
      $(document.body).addClass('desktop');
      $(document.body).removeClass('mobile');
    } else {
      $(document.body).removeClass('desktop');
      $(document.body).addClass('mobile');
    }
  }
  $('body.mobile #search-form').on("click touch", function(event) {
    //event.preventDefault();
    // if the search has already been clicked then the next click should be
    // to submit the form
    $("#header-search-container form").submit();
  });
  // click on the search icon to make the search bar appear
  // $('body.desktop #basic-addon1').on("click touch", function(event) {
  //   event.preventDefault();
  //   // if the search has already been clicked then the next click should be
  //   // to submit the form
  //   if($(this).hasClass("prevented")) {
  //     $("#header-search-container form").submit();
  //   } else {
  //     $(this).addClass("prevented");
  //     $('#search-form input.form-control').toggleClass('hidden').toggle('slide', {
  //       direction: 'left',
  //     }, 2000);
  //   }
  // });

  // click anywhere on the site besides the #basic-addon1 div and children
  // $('body.desktop').on("click touch", function(e){
  //   if(!$(e.target).closest('#search-form').length) {
  //     $('#search-form input.form-control').hide("slow", function() {
  //       // hide search and remove prevented class
  //     });
  //     //$('#basic-addon1').removeClass("prevented");
  //     //$('#search-form input.form-control').addClass('hidden');
  //   }
  // });
  // $('#basic-addon1 a').on("click touch", function(event) {
  //   event.preventDefault();
  //   if($(this).hasClass("prevented")) {
  //     $("#basic-addon1 form").submit();
  //   } else {
  //     $(this).addClass("prevented");
  //     $('form.search__form--hidden').show("slow", function() {
  //       // show search
  //     });
  //   }
  // });
  $(window).resize(checkDimensions);
}(jQuery));
