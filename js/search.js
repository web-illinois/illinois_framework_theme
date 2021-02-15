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
    if (x >= 992) {
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
  $(window).resize(checkDimensions);
}(jQuery));
