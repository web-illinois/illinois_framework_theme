(function (Drupal, once) {
  Drupal.behaviors.paragraphCtaNarrow = {
    attach: function (context) {
      const selector = 'ilw-columns .cta-narrow-wrapper.fixed-width';

      once('paragraphCtaNarrow', selector, context).forEach(function (el) {
        el.classList.remove('fixed-width');
      });
    }
  };
})(Drupal, once);
