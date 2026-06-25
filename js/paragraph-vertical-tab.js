(function (Drupal, once) {
  Drupal.behaviors.paragraphVerticalTab = {
    attach: function (context) {
      const selector = [
        'ilw-columns .paragraph--type--vertical-tab ilw-content[width="auto"]',
        '.paragraph--type--vertical-tab ilw-content[width="auto"]',
        'ilw-columns .paragraph--type--vertical-tab ilw-tabs[width="auto"]',
        // fix for paragraphs in news content type
        'article.news .paragraph--type--vertical-tab ilw-content[width="auto"]',
        'article.news .paragraph--type--vertical-tab ilw-tabs[width="auto"]',
        // fix for paragraphs in spotlight content type
        'article.spotlight .paragraph--type--vertical-tab ilw-content[width="auto"]',
        'article.spotlight .paragraph--type--vertical-tab ilw-tabs[width="auto"]'
      ].join(', ');

      once('paragraphVerticalTab', selector, context).forEach(function (el) {
        el.removeAttribute('width');
      });
    }
  };
})(Drupal, once);
