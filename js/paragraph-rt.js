(function (Drupal, once) {
  Drupal.behaviors.paragraphRt = {
    attach: function (context) {
      const themedSelector = 'ilw-columns .paragraph--type--rt ilw-content:is([theme="gray"], [theme="blue"], [theme="orange"], [theme="orange-gradient"], [theme="blue-gradient"])';
      once('paragraphRtBackground', themedSelector, context).forEach(function (el) {
        el.setAttribute('padding', '20px 20px 30px');
      });

      const widthSelector = 'ilw-columns .paragraph--type--rt ilw-columns[width="auto"]';
      once('paragraphRt', widthSelector, context).forEach(function (el) {
        el.removeAttribute('width');
      });
    }
  };
})(Drupal, once);
