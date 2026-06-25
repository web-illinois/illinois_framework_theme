(function (Drupal, drupalSettings, once) {
  Drupal.behaviors.googleCse = {
    attach: function (context) {
      once('googleCse', 'html', context).forEach(function () {
        if (!drupalSettings.google_cse || !drupalSettings.google_cse.google_api) {
          return;
        }

        const cx = drupalSettings.google_cse.google_api;
        const gcse = document.createElement('script');
        gcse.type = 'text/javascript';
        gcse.async = true;
        gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;

        const s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(gcse, s);
      });
    }
  };
})(Drupal, drupalSettings, once);
