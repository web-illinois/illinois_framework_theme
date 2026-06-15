jQuery(function($) {
  $('ilw-columns .paragraph--type--image-gallery ilw-grid[width="page"]').removeAttr('width');
  $('article.news .paragraph--type--image-gallery ilw-grid[width="page').removeAttr('width');//fix for paragraphs in other content types
  $('article.spotlight .paragraph--type--image-gallery ilw-grid[width="page"]').removeAttr('width');
  $('article.blog .paragraph--type--image-gallery ilw-grid[width="page"]').removeAttr('width');
});
