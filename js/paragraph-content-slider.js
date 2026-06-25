(function (Drupal, once) {
  Drupal.behaviors.paragraphContentSlider = {
    attach: function (context) {
      const selector = 'ilw-columns .paragraph--type--content-slider ilw-content[width="auto"]';

      once('paragraphContentSlider', selector, context).forEach(function (el) {
        el.removeAttribute('width');
      });
    }
  };
})(Drupal, once);
