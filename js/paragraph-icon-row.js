(function (Drupal, once) {
  Drupal.behaviors.paragraphIconRow = {
    attach: function (context) {
      const selector = [
        'ilw-columns .paragraph--type--icon-row ilw-grid[width="page"]',
        // fix for paragraphs in news content type
        'article.news .paragraph--type--icon-row ilw-grid[width="page"]',
        // fix for paragraphs in spotlight content type
        'article.spotlight .paragraph--type--icon-row ilw-grid[width="page"]',
        // fix for paragraphs in blog content type
        'article.blog .paragraph--type--icon-row ilw-grid[width="page"]'
      ].join(', ');

      once('paragraphIconRow', selector, context).forEach(function (el) {
        el.removeAttribute('width');
      });
    }
  };
})(Drupal, once);
