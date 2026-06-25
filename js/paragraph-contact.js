(function (Drupal, once) {
  Drupal.behaviors.paragraphContact = {
    attach: function (context) {
      once(
        'paragraphContactWidth',
        'ilw-columns .paragraph--type--contact ilw-columns[width="auto"]',
        context
      ).forEach(function (el) {
        el.removeAttribute('width');
      });

      once(
        'paragraphContactGray',
        '.paragraph--type--contact ilw-columns[theme="gray"]',
        context
      ).forEach(function (el) {
        el.setAttribute('padding', '30px 0');
      });

      // Capture the elements that originally have the reverse attribute, then
      // toggle it based on viewport width (apply now and on resize).
      const reverseEls = once('paragraphContactReverse', 'ilw-columns[reverse]', context);
      if (reverseEls.length) {
        const updateReverse = function () {
          const isMobile = window.matchMedia('(max-width: 599px)').matches;
          reverseEls.forEach(function (el) {
            if (isMobile) {
              el.removeAttribute('reverse');
            } else {
              el.setAttribute('reverse', '');
            }
          });
        };

        updateReverse();
        window.addEventListener('resize', updateReverse);
      }
    }
  };
})(Drupal, once);
