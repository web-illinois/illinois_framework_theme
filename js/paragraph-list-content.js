jQuery(function($) {
  $('ilw-columns .paragraph--type--list ilw-content[width="auto"][theme="gray"]').removeAttr('width').attr('padding', '15px 20px 30px 20px');
  $('ilw-columns .paragraph--type--list ilw-content[width="auto"]:not([theme="gray"])').removeAttr('width').attr('padding', '30px 0 20px 0');
  $('.paragraph--type--list ilw-content[width="auto"][theme="gray"]').attr('padding', '20px 0');


  $('ilw-columns .paragraph--type--list ilw-columns[width="page"]').removeAttr('width');
  $('.paragraph--view-mode--default.paragraph--type--list ilw-columns[width="auto"]').removeAttr('width');
  $('article.news .paragraph--type--list ilw-content[width="auto"], article.news .paragraph--type--list ilw-columns[width="page"]').removeAttr('width');//fix for paragraphs in news content type
  $('article.spotlight .paragraph--type--list ilw-content[width="auto"], article.spotlight .paragraph--type--list ilw-columns[width="page"]').removeAttr('width');//fix for paragraphs in spotlight content type

$(window).on('resize load', function() {
    if (window.matchMedia('(max-width: 800px)').matches) {
      $('ilw-columns .paragraph--type--list ilw-columns[theme="gray"]').attr('width', 'page');
      $('ilw-columns .paragraph--type--list ilw-columns[theme="white"]').attr('width', 'page');
    }
  });
});
