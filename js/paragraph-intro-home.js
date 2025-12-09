jQuery(function($) {
  $('ilw-columns .paragraph--type--intro-home ilw-content[width="auto"]').removeAttr('width');
  $('article.news .paragraph--type--intro-home ilw-content[width="auto"]').removeAttr('width');//fix for paragraphs in news content type
  $('article.spotlight .paragraph--type--intro-home ilw-content[width="auto"]').removeAttr('width');//fix for paragraphs in news content type
});
