(function($) {
  checkClasses();
  function checkClasses() {
    if (window.matchMedia('(min-width: 0px)').matches) {
      var largeColumn = [
        "col-lg-1", "col-lg-2", "col-lg-3", "col-lg-4", "col-lg-5", "col-lg-6",
        "col-lg-7", "col-lg-8", "col-lg-9", "col-lg-10", "col-lg-11", "col-lg-12"
      ];
      $('.il-content .paragraph div[class*=col-lg-]').each(function () {
        var cl = $(this).attr('class').split(" ");
        for(var i=0;i<cl.length;i++){
          if($.inArray(cl[i], largeColumn) !== -1) {
            $(this).addClass( 'unset-' + cl[i]);
          }
        }
      });
      $('.il-content .paragraph div[class*=col-lg-]').removeClass(function (index, css) {
        return (css.match(/(^|\s)col-lg-\S+/g) || []).join(' ');
      });
      var largeOffset = [
        "offset-lg-1", "offset-lg-2", "offset-lg-3", "offset-lg-4", "offset-lg-5",
        "offset-lg-6", "offset-lg-7", "offset-lg-8", "offset-lg-9", "offset-lg-10"
      ];
      $('.il-content .paragraph div[class*=offset-lg-]').each(function () {
        var cl = $(this).attr('class').split(" ");
        for(var i=0;i<cl.length;i++){
          if($.inArray(cl[i], largeOffset) !== -1) {
            $(this).addClass( 'unset-' + cl[i]);
          }
        }
      });
      $('.il-content .paragraph div[class*=col-lg-]').removeClass(function (index, css) {
        return (css.match(/(^|\s)offset-lg-\S+/g) || []).join(' ');
      });
    }
    if (window.matchMedia('(min-width: 768px) and (max-width: 991px)').matches) {
      var mediumColumn = [
        "col-md-1", "col-md-2", "col-md-3", "col-md-4", "col-md-5", "col-md-6",
        "col-md-7", "col-md-8", "col-md-9", "col-md-10", "col-md-11", "col-md-12"
      ];
      $('.il-content .paragraph div[class*=col-md-]').each(function () {
        var cl = $(this).attr('class').split(" ");
        for(var i=0;i<cl.length;i++){
          if($.inArray(cl[i], mediumColumn) !== -1) {
            $(this).addClass( 'unset-' + cl[i]);
          }
        }
      });
      $('.il-content .paragraph div[class*=col-md-]').removeClass(function (index, css) {
        return (css.match(/(^|\s)col-md-\S+/g) || []).join(' ');
      });
    }
    if (window.matchMedia('(min-width: 992px)').matches) {
      var mediumColumn = [
        "unset-col-md-1", "unset-col-md-2", "unset-col-md-3", "unset-col-md-4", "unset-col-md-5", "unset-col-md-6",
        "unset-col-md-7", "unset-col-md-8", "unset-col-md-9", "unset-col-md-10", "unset-col-md-11", "unset-col-md-12"
      ];
      $('.il-content .paragraph div[class*=unset-col-md-]').each(function () {
        var cl = $(this).attr('class').split(" ");
        for(var i=0;i<cl.length;i++){

          if($.inArray(cl[i], mediumColumn) !== -1) {
            $(this).addClass( cl[i].replace('unset-', ''));
          }
        }
      });
      $('.il-content .paragraph div[class*=unset-col-md-]').removeClass(function (index, css) {
        return (css.match(/(^|\s)unset-col-md-\S+/g) || []).join(' ');
      });
    }
  }
  $(window).resize(checkClasses);
}(jQuery));
