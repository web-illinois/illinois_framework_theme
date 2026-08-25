jQuery(function($) {
  $('.paragraph--type--list').filter(function() {
    return $(this).closest('ilw-columns, article.news, article.spotlight').length;
  }).each(function() {
    const $list = $(this);

    $list.children('ilw-content[width="auto"], ilw-columns[width="page"]').removeAttr('width');
    $list.children('ilw-columns.list-row').attr('padding', '0 20px');
    $list.children('ilw-content.list-row').attr('padding', '30px 20px 20px');
  });
});
