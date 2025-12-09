jQuery(function($) {
  $('ilw-columns .paragraph--type--feature-grouped ilw-columns[width="auto"]').removeAttr('width');
  $('article.news .paragraph--type--feature-grouped ilw-columns[width="auto"]').removeAttr('width');//fix for paragraphs in news content type
  $('article.spotlight .paragraph--type--feature-grouped ilw-columns[width="auto"]').removeAttr('width');//fix for paragraphs in spotlight content type
});
