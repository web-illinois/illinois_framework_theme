(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.paragraphAccordion = {
    attach: function (context, settings) {
        var acc = document.getElementsByClassName("accordion");
        var i;

        window.onload = function (){
        var activehash = window.location.hash;
        activehash=activehash.slice(1);
        if(activehash){
          var selected = document.getElementById(activehash);
          if(selected){
          selected.click();
          }
        }
      }

        for (i = 0; i < acc.length; i++) {
            acc[i].onclick = function(){
                this.classList.toggle("active");
                if ( this.classList.contains('active') ) {
                    this.setAttribute('aria-expanded', 'true');
                } else {
                    this.setAttribute('aria-expanded', 'false');
                }
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                    panel.setAttribute('aria-hidden', 'true');
                    $(this).find('span').first().removeClass("expanded-level");
                    $(this).find('span').first().addClass("collapsed-level");
                } else {
                    panel.style.display = "block";
                    panel.setAttribute('aria-hidden', 'false');
                    $(this).find('span').first().removeClass("collapsed-level");
                    $(this).find('span').first().addClass("expanded-level");
                }
            }
        }
    }
  };

})(jQuery, Drupal);
