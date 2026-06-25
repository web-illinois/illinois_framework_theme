// Add a responsive wrapper to normal editor-authored tables. Tables using the
// stacked style or an existing custom wrapper div are left alone.
(function (Drupal, once) {
  Drupal.behaviors.tableResponsiveWrapper = {
    attach: function (context) {
      once('tableResponsiveWrapper', 'table', context).forEach(function (table) {
        if (table.classList.contains('table-stack')) {
          return;
        }

        const parent = table.parentElement;
        if (parent && parent.tagName === 'DIV' && parent.hasAttribute('class')) {
          return;
        }

        const wrapper = document.createElement('div');
        wrapper.className = 'table-responsive-wrapper';
        table.replaceWith(wrapper);
        wrapper.appendChild(table);
      });
    }
  };
})(Drupal, once);

// Automatically apply data-label attributes to .table-stack tables
// so the CSS ::before pseudo-element can display header labels in stacked mobile view.
(function (Drupal, once) {
  Drupal.behaviors.tableStackLabels = {
    attach: function (context) {
      once('tableStackLabels', '.table-stack', context).forEach(function (table) {
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
