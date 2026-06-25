(function (Drupal, once) {
  // When two adjacent white-background blocks stack, trim the doubled padding
  // between them by reducing the bottom padding of the first and the top
  // padding of the second.
  Drupal.behaviors.paragraphWhitespace = {
    attach: function (context) {
      once('paragraphWhitespace', '.background--color--white', context).forEach(function (el) {
        const next = el.nextElementSibling;

        if (
          next &&
          next.tagName === 'DIV' &&
          !next.classList.contains('paragraph--type--feature-split') &&
          !next.classList.contains('paragraph--type--feature-video') &&
          next.classList.contains('background--color--white')
        ) {
          el.classList.add('reduce-padding--bottom');
          next.classList.add('reduce-padding--top');
        }
      });
    }
  };
})(Drupal, once);
