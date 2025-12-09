jQuery(function($) {
  $('ilw-columns .paragraph--type--bb ilw-content[width="page"], ilw-columns .paragraph--type--bb ilw-content[width="full"]').removeAttr('width');
  $('ilw-columns .paragraph--type--bb ilw-grid[width="page"], ilw-columns .paragraph--type--bb ilw-grid[width="full"]').removeAttr('width');
  $('article.news .paragraph--type--bb ilw-content[width="page"], article.news .paragraph--type--bb ilw-grid[width="page"]').removeAttr('width');//fix for paragraphs in news content type
  $('article.spotlight .paragraph--type--bb ilw-content[width="page"], article.spotlight .paragraph--type--bb ilw-grid[width="page"]').removeAttr('width');//fix for paragraphs in news content type

  function setFullWidthPadding() {
    if (window.matchMedia('(max-width: 599px)').matches) {
      $('.paragraph--type--bb ilw-content[width="full"]').attr('padding', '0 30px');
      $('.paragraph--type--bb ilw-grid[width="full"]').attr('padding', '0 20px');
    } else {
      $('.paragraph--type--bb ilw-content[width="full"]').attr('padding', '0 40px');
      $('.paragraph--type--bb ilw-grid[width="full"]').attr('padding', '0 30px');
    }
  }

  // Run once on DOM ready
  setFullWidthPadding();

  // Run on resize
  $(window).on('resize', setFullWidthPadding);
});
