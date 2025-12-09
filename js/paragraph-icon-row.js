jQuery(function($) {
  $('ilw-columns .paragraph--type--icon-row ilw-content[width="auto"], ilw-columns .paragraph--type--icon-row ilw-grid[width="page"]').removeAttr('width');
  $('article.news .paragraph--type--icon-row ilw-content[width="auto"], article.news .paragraph--type--icon-row ilw-grid[width="page"]').removeAttr('width');//fix for paragraphs in news content type
  $('article.spotlight .paragraph--type--icon-row ilw-content[width="auto"], article.spotlight .paragraph--type--icon-row ilw-grid[width="page"]').removeAttr('width');//fix for paragraphs in spotlight content type
});
