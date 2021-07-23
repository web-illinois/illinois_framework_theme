jQuery(function ($) {
  (function() {
    var album = 'set:' + album_id;
    console.log('galleria--display.js');
    Galleria.loadTheme('css/galleria/themes/twelve/galleria.twelve.min.js');
    Galleria.run('.galleria', {
      flickr: album,
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
