// Add a responsive wrapper to normal editor-authored tables. Tables using the
// stacked style or an existing custom wrapper div are left alone.
(function (Drupal, $) {
  Drupal.behaviors.tableResponsiveWrapper = {
    attach: function (context) {
      $(context)
        .find('table')
        .add($(context).filter('table'))
        .each(function () {
          const $table = $(this);
          const $parent = $table.parent();

          if ($table.hasClass('table-stack')) {
            return;
          }

          if ($parent.hasClass('table-responsive-wrapper')) {
            return;
          }

          if ($parent.is('div[class]')) {
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
