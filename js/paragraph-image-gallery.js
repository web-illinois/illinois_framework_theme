(function (Drupal, once) {
  Drupal.behaviors.paragraphImageGallery = {
    attach: function (context) {
      const selector = [
        'ilw-columns .paragraph--type--image-gallery ilw-grid[width="page"]',
        // fix for paragraphs in news content type
        'article.news .paragraph--type--image-gallery ilw-grid[width="page"]',
        // fix for paragraphs in spotlight content type
        'article.spotlight .paragraph--type--image-gallery ilw-grid[width="page"]',
        // fix for paragraphs in blog content type
        'article.blog .paragraph--type--image-gallery ilw-grid[width="page"]'
      ].join(', ');

      once('paragraphImageGallery', selector, context).forEach(function (el) {
        el.removeAttribute('width');
      });
    }
  };
})(Drupal, once);
