(function (Drupal, once) {
  Drupal.behaviors.paragraphListContent = {
    attach: function (context) {
      once('paragraphListContent', '.paragraph--type--list', context).forEach(function (list) {
        if (!list.closest('ilw-columns, article.news, article.spotlight')) {
          return;
        }

        list.querySelectorAll(':scope > ilw-content[width="auto"], :scope > ilw-columns[width="page"]').forEach(function (el) {
          el.removeAttribute('width');
        });
        list.querySelectorAll(':scope > ilw-columns.list-row').forEach(function (el) {
          el.setAttribute('padding', '0 20px');
        });
        list.querySelectorAll(':scope > ilw-content.list-row').forEach(function (el) {
          el.setAttribute('padding', '30px 20px 20px');
        });
      });
    }
  };
})(Drupal, once);
