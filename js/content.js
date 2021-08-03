(function($) {
  checkClasses();
  function checkClasses() {
    if (window.matchMedia('(min-width: 992px)').matches) {

      var largeColumn = [
        "col-lg-1", "col-lg-2", "col-lg-3", "col-lg-4", "col-lg-5", "col-lg-6",
        "col-lg-7", "col-lg-8", "col-lg-9", "col-lg-10", "col-lg-11", "col-lg-12"
      ];

      $('.paragraph div[class*=col-lg-]').each(function () {
        var cl = $(this).attr('class').split(" ");
        for(var i=0;i<cl.length;i++){

          if($.inArray(cl[i], largeColumn) !== -1) {
            $(this).addClass( cl[i] + '-unset');
          }
        }
      });
      // $('.paragraph div[class*=col-lg-]').removeClass(function (index, css) {
      //   return (css.match(/(^|\s)col-lg-\S+/g) || []).join(' ');
      // });


    } else {
      if (window.matchMedia('(min-width: 768px) and (max-width: 991px)').matches) {
        $('.paragraph div[class*=col-md-]').removeClass(function (index, css) {
          return (css.match(/(^|\s)col-md-\S+/g) || []).join(' ');
        });
      }
    }
  }
  $(window).resize(checkClasses);
}(jQuery));


// (function($) {
//   checkDimensions();
//   // Check window dimensions and apply class desktop or mobile to the body
//   // of the document for easy css targeting
//   function checkDimensions() {
//     var w=window;
//     var d=document;
//     var e=d.documentElement;
//     var g=d.getElementsByTagName('body')[0];
//     var x=w.innerWidth||e.clientWidth||g.clientWidth;
//     if (x >= 992) {
//       $(document.body).addClass('desktop');
//       $(document.body).removeClass('mobile');
//     } else {
//       $(document.body).removeClass('desktop');
//       $(document.body).addClass('mobile');
//     }
//   }
//   $('body.mobile #search-form').on("click touch", function(event) {
//     //event.preventDefault();
//     // if the search has already been clicked then the next click should be
//     // to submit the form
//     $("#header-search-container form").submit();
//   });
//   $(window).resize(checkDimensions);
// }(jQuery));
