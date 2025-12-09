jQuery(function($) {
  $('ilw-columns .paragraph--type--vertical-tab ilw-content[width="auto"]').removeAttr('width').attr('padding', '0 0 0 30px');
  $('ilw-columns .paragraph--type--vertical-tab ilw-tabs[width="auto"]').removeAttr('width');
  $('article.news .paragraph--type--vertical-tab ilw-content[width="auto"], article.news .paragraph--type--vertical-tab ilw-tabs[width="auto"]').removeAttr('width');//fix for paragraphs in news content type
  $('article.spotlight .paragraph--type--vertical-tab ilw-content[width="auto"], article.spotlight .paragraph--type--vertical-tab ilw-tabs[width="auto"]').removeAttr('width');//fix for paragraphs in spotlight content type
});
