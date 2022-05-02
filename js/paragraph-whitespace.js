jQuery(function ($) {
  // find each div with the white background class
  ($("div:not(.paragraph--type--feature-split, .paragraph--type--feature-video)").find(".background--color--white")).each(function () {
      /*
         Check to see if the next direct div has the same white background class.
         If so, then reduce the bottom padding on the current div and reduce
         the top padding on the next div with a white background.
      */
      if($(this).next("div").not(".paragraph--type--feature-split, .paragraph--type--feature-video").hasClass("background--color--white")){
        $(this).addClass('reduce-padding--bottom');
        $(this).next("div").addClass('reduce-padding--top');
      }
    });
});
