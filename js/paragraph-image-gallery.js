jQuery(function($) {
  $('ilw-columns .paragraph--type--image-gallery ilw-content[width="auto"]').removeAttr('width');
  $('ilw-columns .paragraph--type--image-gallery ilw-grid[width="auto"]').removeAttr('width');
  $('article.news .paragraph--type--image-gallery ilw-grid[width="auto"], article.news .paragraph--type--image-gallery ilw-content[width="auto"]').removeAttr('width');//fix for paragraphs in news content type
});
