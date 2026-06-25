(function (Drupal, once) {
  Drupal.behaviors.paragraphFeatureGroup = {
    attach: function (context) {
      const selector = [
        'ilw-columns .paragraph--type--feature-grouped ilw-columns[width="auto"]',
        // fix for paragraphs in news content type
        'article.news .paragraph--type--feature-grouped ilw-columns[width="auto"]',
        // fix for paragraphs in spotlight content type
        'article.spotlight .paragraph--type--feature-grouped ilw-columns[width="auto"]'
      ].join(', ');

      once('paragraphFeatureGroup', selector, context).forEach(function (el) {
        el.removeAttribute('width');
      });
    }
  };
})(Drupal, once);
