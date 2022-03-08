jQuery(function ($) {
  if($('.region-content > div.il-content-with-section-nav > div.il-content').length) {
    $('#block-illinois-framework-theme-page-title').prependTo('.region-content > div.il-content-with-section-nav > div.il-content');
    $('#block-illinois-framework-theme-breadcrumbs').prependTo('.region-content > div.il-content-with-section-nav > div.il-content');
  } else {

  }
});
