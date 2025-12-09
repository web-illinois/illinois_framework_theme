jQuery(function($) {
  $('ilw-columns .paragraph--type--contact ilw-columns[width="auto"]').removeAttr('width');
  $('.paragraph--type--contact ilw-columns[theme="gray"]').attr('padding', '30px 0');

  // Store elements that originally have the reverse attribute
  let $reverseEls = $('ilw-columns[reverse]').toArray();

  $(window).on('resize load', function() {
    if (window.matchMedia('(max-width: 599px)').matches) {
      $reverseEls.forEach(function(el) {
        el.removeAttribute('reverse');
      });
    } else {
      $reverseEls.forEach(function(el) {
        el.setAttribute('reverse', '');
      });
    }
  });
});
