      var $ = jQuery;

      $("#faculty-explorer--main-area-select").change(function() {

        displayResults();

      });

      $("#faculty-explorer--secondary-area-select").change(function() {

        displayResults();

      });

      $("div.button-group button").click(function(){

        window.location.hash = "category-list";

        $("div.button-group button").removeClass('active').addClass('inactive');
        $(this).addClass("active").removeClass("inactive");
        var buttonValue = $(this).text();
        if (buttonValue === "Animals") {
          $(".category-one-section").addClass("active").removeClass("inactive");
          $(".category-two-section").addClass("inactive").removeClass("active");
          $(".category-people-discipline-wrapper").html('');
          $(".category-people-discipline-wrapper").addClass("inactive").removeClass("active");
        }
        else {
          $(".category-two-section").addClass("active").removeClass("inactive");
          $(".category-one-section").addClass("inactive").removeClass("active");
          $(".category-people-discipline-wrapper").addClass("inactive").removeClass("active");
        }

      });

      $(".discipline-button").click(function(event){
        $(".category-people-discipline-wrapper").addClass("active").removeClass("inactive");
      });

      $(".m-discipline-button").click(function(event){
        $(".category-people-discipline-wrapper").addClass("active").removeClass("inactive");
      });

      function displayResults() {
        // Find the faculty that meet the criteria they've selected.  
        // If they've selected nothing, display the filler text

        if ($('#faculty-explorer--main-area-select').val() == "0" && $('#faculty-explorer--secondary-area-select').val() == "0") {
          // Nothing selected.  Display filler text.
          $('.faculty-explorer--result-descriptions').html('Start Exploring');
          $('.faculty-explorer--result-faculty').html('');
        }
        else if ($('#faculty-explorer--main-area-select').val() != "0" && $('#faculty-explorer--secondary-area-select').val() != "0") {
          // Main and secondary areas both selected.  Show both in description area and 
          // query for faculty who meet both criteria

          main_area = main.filter(function (main_item) { return main_item.id == $('#faculty-explorer--main-area-select').val()});
          secondary_area = secondary.filter(function (secondary_item) { return secondary_item.id == $('#faculty-explorer--secondary-area-select').val()});

          var MainArea = main_area[0].title;
          var SecondaryArea = secondary_area[0].title;
          
          main_area_description = '<div class=\"faculty-explorer--result--area\"><div class=\"faculty-explorer--result--area-description--image\"><img src=\"\/themes\/illinois_framework_theme\/images\/block-i.jpg\"><\/div>';
          main_area_description += '<div class=\"faculty-explorer--result--area-description--text\"><div class=\"faculty-explorer--result--area-description--text--title\">' + MainArea + '<\/div>';
          main_area_description += '<div class=\"faculty-explorer--result--area-description--text--description\">' + main_area[0].description + '<\/div><\/div><\/div>';

          secondary_area_description = '<div class=\"faculty-explorer--result--area\"><div class=\"faculty-explorer--result--area-description--image\"><img src=\"\/themes\/illinois_framework_theme\/images\/block-i.jpg\"><\/div>';
          secondary_area_description += '<div class=\"faculty-explorer--result--area-description--text\"><div class=\"faculty-explorer--result--area-description--text--title\">' + SecondaryArea + '<\/div>';
          secondary_area_description += '<div class=\"faculty-explorer--result--area-description--text--description\">' + secondary_area[0].description + '<\/div><\/div><\/div>';

          $('.faculty-explorer--result--descriptions').html(main_area_description + secondary_area_description);
          
          $.ajax({url: "https://ws.engr.illinois.edu/directory/list.asp?unit=1538&id=$path[1]&mainareaname=" + MainArea + "&areaname=" + SecondaryArea + "&template=308", success: function(result) {
            result = result.replace(/document.write\(\'/g, '');
            result = result.replace(/\'\);/g, '');
            result = result.replace(/\\/g, '');
            result = result.replace('class="row"', '');
            result = result.substring(0, result.indexOf('function ShowTab('));

            var faculty_output = '<div class=\"faculty-explorer--result--faculty--title\">Faculty studying ' + MainArea + ' and ' + SecondaryArea + '</div>' + result;

            $(".faculty-explorer--result-faculty").html(faculty_output);
          }});
        }
        else if ($('#faculty-explorer--main-area-select').val() != "0" && $('#faculty-explorer--secondary-area-select').val() == "0") {
          // Main area only selected.  Show it in description area and 
          // query for faculty who work with that area
          main_area = main.filter(function (main_item) { return main_item.id == $('#faculty-explorer--main-area-select').val()});

          var MainArea = main_area[0].title;

          main_area_description = '<div class=\"faculty-explorer--result--area\"><div class=\"faculty-explorer--result--area-description--image\"><img src=\"\/themes\/illinois_framework_theme\/images\/block-i.jpg\"><\/div>';
          main_area_description += '<div class=\"faculty-explorer--result--area-description--text\"><div class=\"faculty-explorer--result--area-description--text--title\">' + MainArea + '<\/div>';
          main_area_description += '<div class=\"faculty-explorer--result--area-description--text--description\">' + main_area[0].description + '<\/div><\/div><\/div>';

          $('.faculty-explorer--result--descriptions').html(main_area_description);
          
          $.ajax({url: "https://ws.engr.illinois.edu/directory/list.asp?unit=1538&id=$path[1]&mainareaname=" + MainArea + "&template=308", success: function(result) {
            result = result.replace(/document.write\(\'/g, '');
            result = result.replace(/\'\);/g, '');
            result = result.replace(/\\/g, '');
            result = result.replace('class="row"', '');
            result = result.substring(0, result.indexOf('function ShowTab('));

            var faculty_output = '<div class=\"faculty-explorer--result--faculty--title\">Faculty studying ' + MainArea + '</div>' + result;

            $(".faculty-explorer--result-faculty").html(faculty_output);
          }});
        }
        else if ($('#faculty-explorer--main-area-select').val() == "0" && $('#faculty-explorer--secondary-area-select').val() != "0") {
          // Secondary area only selected.  Show it in description area and 
          // query for faculty who work with that area
          secondary_area = secondary.filter(function (secondary_item) { return secondary_item.id == $('#faculty-explorer--secondary-area-select').val()});

          var SecondaryArea = secondary_area[0].title;

          secondary_area_description = '<div class=\"faculty-explorer--result--area\"><div class=\"faculty-explorer--result--area-description--image\"><img src=\"\/themes\/illinois_framework_theme\/images\/block-i.jpg\"><\/div>';
          secondary_area_description += '<div class=\"faculty-explorer--result--area-description--text\"><div class=\"faculty-explorer--result--area-description--text--title\">' + SecondaryArea + '<\/div>';
          secondary_area_description += '<div class=\"faculty-explorer--result--area-description--text--description\">' + secondary_area[0].description + '<\/div><\/div><\/div>';

          $('.faculty-explorer--result--descriptions').html(secondary_area_description);
          
          $.ajax({url: "https://ws.engr.illinois.edu/directory/list.asp?unit=1538&id=$path[1]&areaname=" + SecondaryArea + "&template=308", success: function(result) {
            result = result.replace(/document.write\(\'/g, '');
            result = result.replace(/\'\);/g, '');
            result = result.replace(/\\/g, '');
            result = result.replace('class="row"', '');
            result = result.substring(0, result.indexOf('function ShowTab('));

            var faculty_output = '<div class=\"faculty-explorer--result--faculty--title\">Faculty studying ' + SecondaryArea + '</div>' + result;

            $(".faculty-explorer--result-faculty").html(faculty_output);
          }});
        }
        else {
console.log('You should not be here');
          // Something is wrong.  This should never execute.  This is here because sometimes stuff happens.
          $('.faculty-explorer--result--descriptions').html('Start Exploring');
          $('.faculty-explorer--result-faculty').html() = '';
        }

      };


      // trigger by event
      $('.small-12 .category-description-wrapper a.reveal-link').trigger('click');
      $('.small-12 .category-description-wrapper a.close-reveal-modal').trigger('click');
