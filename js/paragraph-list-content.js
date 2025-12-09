jQuery(function($) {
  $('ilw-columns .paragraph--type--list ilw-content[width="auto"][theme="gray"]').removeAttr('width').attr('padding', '15px 20px 30px 20px');
  $('ilw-columns .paragraph--type--list ilw-content[width="auto"]:not([theme="gray"])').removeAttr('width').attr('padding', '30px 0');
  $('ilw-columns .paragraph--type--list ilw-columns[width="page"]').removeAttr('width');
  $('article.news .paragraph--type--list ilw-content[width="auto"], article.news .paragraph--type--list ilw-columns[width="page"]').removeAttr('width');//fix for paragraphs in news content type
  $('article.spotlight .paragraph--type--list ilw-content[width="auto"], article.spotlight .paragraph--type--list ilw-columns[width="page"]').removeAttr('width');//fix for paragraphs in spotlight content type
});
