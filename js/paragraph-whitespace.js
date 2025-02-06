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

 // remove top padding from first paragraph element if no body field is present
jQuery(function ($) {
  if($('.field--name-body').length){ }
    else {
       // find next div with paragraph class after title div then add a class to remove padding, unless the nex paragraph is rich text with a gray background
    var $nextParagraph = $('#block-illinois-framework-theme-page-title').next('.paragraph');
    if (!$nextParagraph.hasClass('paragraph--type--rt') || !$nextParagraph.hasClass('background--color--gray')) {
      $nextParagraph.addClass('remove-padding--top');
    }
    }
  });
