(function (Drupal, once) {
  Drupal.behaviors.paragraphCalendar = {
    attach: function (context) {
      const selector = 'ilw-columns .paragraph--type--calendar ilw-content[width="auto"]';

      once('paragraphCalendar', selector, context).forEach(function (el) {
        el.removeAttribute('width');
      });
    }
  };
})(Drupal, once);
