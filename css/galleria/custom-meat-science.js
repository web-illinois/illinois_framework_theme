jQuery(function ($) {
  (function() {
    Galleria.loadTheme('css/galleria/themes/twelve/galleria.twelve.min.js');
    Galleria.run('.galleria', {
      flickr: 'set:72157719184125316',
      flickrOptions: {
        max:100,
        imageSize: 'original',
      }
    });
    Galleria.configure({
      autoplay: 3000,
      transition: 'slide',
      transitionSpeed: 1000,
      height: 0.666
    });
  }());
});
