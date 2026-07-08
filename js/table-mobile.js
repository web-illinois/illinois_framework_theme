// Add a responsive wrapper to normal editor-authored tables. Tables using the
// stacked style or an existing custom wrapper div are left alone. A fixed-width
// parent is a layout container, so tables inside it still get an inner wrapper.
(function (Drupal, once) {
  const responsiveWrapperClass = 'table-responsive-wrapper';
  const stackedTableClass = 'table-stack';
  const fixedWidthClass = 'fixed-width';
  const responsiveTableSelector = `table:not(.${stackedTableClass})`;

  Drupal.behaviors.tableResponsiveWrapper = {
    attach: function (context) {
      once('tableResponsiveWrapper', responsiveTableSelector, context).forEach(
        function (table) {
          table.classList.remove(responsiveWrapperClass);

          if (table.classList.contains(stackedTableClass)) {
            return;
          }

          const parent = table.parentElement;
          if (parent && parent.classList.contains(responsiveWrapperClass)) {
            return;
          }

          if (
            parent &&
            parent.tagName === 'DIV' &&
            parent.hasAttribute('class') &&
            !parent.classList.contains(fixedWidthClass)
          ) {
            return;
          }

          const wrapper = document.createElement('div');
          wrapper.className = responsiveWrapperClass;
          table.replaceWith(wrapper);
          wrapper.appendChild(table);
        }
      );
    }
  };
})(Drupal, once);

// Automatically apply data-label attributes to .table-stack tables
// so the CSS ::before pseudo-element can display header labels in stacked mobile view.
(function (Drupal, once) {
  Drupal.behaviors.tableStackLabels = {
    attach: function (context) {
      once('tableStackLabels', '.table-stack', context).forEach(function (table) {
        table.classList.remove('table-responsive-wrapper');

        const headerCells = table.querySelectorAll('thead th');
        if (!headerCells.length) {
          return;
        }

        const headers = [];
        for (let i = 0; i < headerCells.length; i++) {
          headers.push(headerCells[i].textContent.trim());
        }

        const rows = table.querySelectorAll('tbody tr');
        for (let r = 0; r < rows.length; r++) {
          const cells = rows[r].cells;
          for (let c = 0; c < cells.length && c < headers.length; c++) {
            if (headers[c]) {
              cells[c].setAttribute('data-label', headers[c]);
            }
          }
        }
      });
    }
  };
})(Drupal, once);
