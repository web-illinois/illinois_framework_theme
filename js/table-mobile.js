// Move the responsive class from editor-authored tables to a wrapper so overflow
// belongs to a real container, including inside sidebar column layouts.
(function (Drupal, $) {
  Drupal.behaviors.tableResponsiveWrapper = {
    attach: function (context) {
      $(context)
        .find('table.table-responsive-wrapper')
        .add($(context).filter('table.table-responsive-wrapper'))
        .each(function () {
          const $table = $(this);

          if ($table.parent().hasClass('table-responsive-wrapper')) {
            return;
          }

          $table
            .removeClass('table-responsive-wrapper')
            .wrap('<div class="table-responsive-wrapper"></div>');
        });
    }
  };
})(Drupal, jQuery);

// Automatically apply data-label attributes to .table-stack tables
// so the CSS ::before pseudo-element can display header labels in stacked mobile view.
(function (Drupal, $) {
  Drupal.behaviors.tableStackLabels = {
    attach: function (context) {
      $(context).find('.table-stack').each(function () {
        const $table = $(this);
        const headers = [];

        $table.find('thead th').each(function () {
          headers.push($(this).text().trim());
        });

        if (!headers.length) {
          return;
        }

        $table.find('tbody tr').each(function () {
          $(this).find('td').each(function (index) {
            if (headers[index]) {
              $(this).attr('data-label', headers[index]);
            }
          });
        });
      });
    }
  };
})(Drupal, jQuery);
