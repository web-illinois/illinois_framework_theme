(function (Drupal, once) {
  function setFullWidthPadding() {
    const isMobile = window.matchMedia('(max-width: 599px)').matches;

    document
      .querySelectorAll('.paragraph--type--bb ilw-content[width="full"]')
      .forEach(function (el) {
        el.setAttribute('padding', isMobile ? '0 30px' : '0 40px');
      });

    document
      .querySelectorAll('.paragraph--type--bb ilw-grid[width="full"]')
      .forEach(function (el) {
        el.setAttribute('padding', isMobile ? '0 20px 30px' : '0 30px 30px');
        el.setAttribute('innerwidth', isMobile ? '300px' : '460px');
      });
  }

  Drupal.behaviors.paragraphBb = {
    attach: function (context) {
      const widthSelector = [
        'ilw-columns .paragraph--type--bb ilw-content[width="page"]',
        'ilw-columns .paragraph--type--bb ilw-content[width="full"]',
        'ilw-columns .paragraph--type--bb ilw-grid[width="page"]',
        'ilw-columns .paragraph--type--bb ilw-grid[width="full"]',
        // fix for paragraphs in news content type
        'article.news .paragraph--type--bb ilw-content[width="page"]',
        'article.news .paragraph--type--bb ilw-grid[width="page"]',
        // fix for paragraphs in spotlight content type
        'article.spotlight .paragraph--type--bb ilw-content[width="page"]',
        'article.spotlight .paragraph--type--bb ilw-grid[width="page"]'
      ].join(', ');
      once('paragraphBb', widthSelector, context).forEach(function (el) {
        el.removeAttribute('width');
      });

      // Apply responsive padding now; bind the resize listener only once.
      setFullWidthPadding();
      once('paragraphBbResize', 'html', context).forEach(function () {
        window.addEventListener('resize', setFullWidthPadding);
      });
    }
  };
})(Drupal, once);
