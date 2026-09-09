(function (Drupal, once) {
  Drupal.behaviors.paragraphRt = {
    attach: function (context) {
      const graySelector = 'ilw-columns .paragraph--type--rt ilw-content[theme="gray"]';
      once('paragraphRtGray', graySelector, context).forEach(function (el) {
        el.setAttribute('padding', '20px 20px 30px');
      });

      const widthSelector = 'ilw-columns .paragraph--type--rt ilw-columns[width="auto"]';
      once('paragraphRt', widthSelector, context).forEach(function (el) {
        el.removeAttribute('width');
      });
    }
  };
})(Drupal, once);
