jQuery(function($) {
  $('ilw-columns .paragraph--type--content-slider ilw-content[width="auto"]').removeAttr('width');
  $(document).ready(function() {
    $('.ils-contentslider').attr({
      "width": "100%",
      "justify-content": "center"
    })
  })
});
