jQuery(function($) {
  $('ilw-columns .paragraph--type--cards ilw-content[width="page"], ilw-columns .paragraph--type--cards ilw-grid[width="page"]').removeAttr('width');
  $('article.news .paragraph--type--cards ilw-content[width="page"], article.news .paragraph--type--cards ilw-grid[width="page"]').removeAttr('width');//fix for paragraphs in news content type
  $('article.spotlight .paragraph--type--cards ilw-content[width="page"], article.spotlight .paragraph--type--cards ilw-grid[width="page"]').removeAttr('width');//fix for paragraphs in spotlight content type
});
