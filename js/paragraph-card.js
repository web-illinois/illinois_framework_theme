(function (Drupal, once) {
  Drupal.behaviors.paragraphCard = {
    attach: function (context) {
      const selector = [
        'ilw-columns .paragraph--type--cards ilw-content[width="page"]',
        'ilw-columns .paragraph--type--cards ilw-grid[width="page"]',
        // fix for paragraphs in news content type
        'article.news .paragraph--type--cards ilw-content[width="page"]',
        'article.news .paragraph--type--cards ilw-grid[width="page"]',
        // fix for paragraphs in spotlight content type
        'article.spotlight .paragraph--type--cards ilw-content[width="page"]',
        'article.spotlight .paragraph--type--cards ilw-grid[width="page"]'
      ].join(', ');

      once('paragraphCard', selector, context).forEach(function (el) {
        el.removeAttribute('width');
      });
    }
  };
})(Drupal, once);
