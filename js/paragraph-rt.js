jQuery(function($) {
  $('ilw-columns .paragraph--type--rt ilw-content[width="auto"]:not([theme="gray"])').removeAttr('width');
  $('ilw-columns .paragraph--type--rt ilw-content[width="auto"][theme="gray"]').removeAttr('width').attr('padding', '20px 20px 30px');
  $('ilw-columns .paragraph--type--rt ilw-columns[width="auto"]').removeAttr('width');
  $('article.news .paragraph--type--rt ilw-content[width="auto"]').removeAttr('width');//fix for paragraphs in news content type
});
