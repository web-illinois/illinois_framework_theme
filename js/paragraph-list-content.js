(function (Drupal, once) {
  Drupal.behaviors.paragraphListContent = {
    attach: function (context) {
      // Gray theme content: remove width, add larger padding.
      once(
        'paragraphListContentGray',
        'ilw-columns .paragraph--type--list ilw-content[width="auto"][theme="gray"]',
        context
      ).forEach(function (el) {
        el.removeAttribute('width');
        el.setAttribute('padding', '15px 20px 30px 20px');
      });

      // Non-gray content: remove width, add vertical padding.
      once(
        'paragraphListContentPlain',
        'ilw-columns .paragraph--type--list ilw-content[width="auto"]:not([theme="gray"])',
        context
      ).forEach(function (el) {
        el.removeAttribute('width');
        el.setAttribute('padding', '30px 0');
      });

      // Nested gray columns content: padding only.
      once(
        'paragraphListContentNested',
        'ilw-columns .paragraph--type--list ilw-columns ilw-content[theme="gray"]',
        context
      ).forEach(function (el) {
        el.setAttribute('padding', '20px');
      });

      // Remaining width attributes to remove (incl. news/spotlight fixes).
      const widthSelector = [
        'ilw-columns .paragraph--type--list ilw-columns[width="page"]',
        'article.news .paragraph--type--list ilw-content[width="auto"]',
        'article.news .paragraph--type--list ilw-columns[width="page"]',
        'article.spotlight .paragraph--type--list ilw-content[width="auto"]',
        'article.spotlight .paragraph--type--list ilw-columns[width="page"]'
      ].join(', ');
      once('paragraphListContentWidth', widthSelector, context).forEach(function (el) {
        el.removeAttribute('width');
      });
    }
  };
})(Drupal, once);
