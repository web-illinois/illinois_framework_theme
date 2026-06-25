(function (Drupal, once) {
  Drupal.behaviors.paragraphRt = {
    attach: function (context) {
      // Gray theme content keeps its width removed but gains padding.
      const graySelector = 'ilw-columns .paragraph--type--rt ilw-content[width="auto"][theme="gray"]';
      once('paragraphRtGray', graySelector, context).forEach(function (el) {
        el.removeAttribute('width');
        el.setAttribute('padding', '20px 20px 30px');
      });

      // Everything else simply has its width attribute removed.
      const widthSelector = [
        'ilw-columns .paragraph--type--rt ilw-content[width="auto"]:not([theme="gray"])',
        'ilw-columns .paragraph--type--rt ilw-columns[width="auto"]',
        // fix for paragraphs in news content type
        'article.news .paragraph--type--rt ilw-content[width="auto"]',
        // fix for paragraphs in spotlight content type
        'article.spotlight .paragraph--type--rt ilw-content[width="auto"]'
      ].join(', ');
      once('paragraphRt', widthSelector, context).forEach(function (el) {
        el.removeAttribute('width');
      });
    }
  };
})(Drupal, once);
