(function (Drupal, once) {
  Drupal.behaviors.paragraphImageGallery = {
    attach: function (context) {
      const selector = [
        'ilw-columns .paragraph--type--image-gallery ilw-content[width="auto"]',
        'ilw-columns .paragraph--type--image-gallery ilw-grid[width="auto"]',
        // fix for paragraphs in news content type
        'article.news .paragraph--type--image-gallery ilw-grid[width="auto"]',
        'article.news .paragraph--type--image-gallery ilw-content[width="auto"]'
      ].join(', ');

      once('paragraphImageGallery', selector, context).forEach(function (el) {
        el.removeAttribute('width');
      });
    }
  };
})(Drupal, once);
