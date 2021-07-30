      var $ = jQuery;

      $("input[name='animal']:radio").change(function() {
console.log('main');
console.log($("input[name='animal']:checked").val());
        displayResultsDirectory();

      });

      $("input[name='discipline']:radio").change(function() {
console.log('secondary');
console.log($("input[name='discipline']:checked").val());
        displayResultsDirectory();

      });

      $(".faculty-explorer--animal--plus-minus").click(function() {
        var name = $(this).attr('name');
        var wasVisible = ($("#" + name).is(":visible"));
        $(".faculty-explorer--animal--body").addClass('faculty-explorer--hide');
        if (!wasVisible) {
          $("#" + name).removeClass('faculty-explorer--hide');
          $(this).text("-");
          activeAnimal = name;
        }
        else {
          $(this).text("+");
          activeAnimal = '';
        }

        update_button_text();

      });

      $(".faculty-explorer--discipline--plus-minus").click(function() {
        var name = $(this).attr('name');
        var wasVisible = ($("#" + name).is(":visible"));
        $(".faculty-explorer--discipline--body").addClass('faculty-explorer--hide');
        if (!wasVisible) {
          $("#" + name).removeClass('faculty-explorer--hide');
          $(this).text("-");
          activeDiscipline = name;
        }
        else {
          $(this).text("+");
          activeDiscipline = '';
        }

        update_button_text();

      });

      function update_button_text() {
        if (activeAnimal == '' && activeDiscipline == '') {
          $(".faculty--explorer--directory-button").text("View all faculty members");
        }
        else if (activeAnimal != '' && activeDiscipline != '') {
          $(".faculty--explorer--directory-button").text("View faculty studying " + activeDiscipline.replace('-', ' ') + " in " + activeAnimal.replace('-', ' '));
        }
        else if (activeAnimal != '') {
          $(".faculty--explorer--directory-button").text("View faculty studying " + activeAnimal.replace('-', ' '));
        }
        else if (activeDiscipline != '') {
          $(".faculty--explorer--directory-button").text("View faculty studying " + activeDiscipline.replace('-', ' '));
        }
      }

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

      function displayResultsDirectory() {
        // Find the faculty that meet the criteria they've selected.  
        // If they've selected nothing, display the filler text

        var MainArea = $("input[name='animal']:checked").val();
        var SecondaryArea = $("input[name='discipline']:checked").val();

        console.log("MainArea: " + MainArea);
        console.log("SecondaryArea: " + SecondaryArea);

        if (MainArea == "all-animals" && SecondaryArea == "all-disciplines") {
          console.log("area 1");
          // Nothing selected.  Display filler text.

          $(".faculty-explorer--result--faculty").html('');
        }
        else if (MainArea != "all-animals" && SecondaryArea != "all-disciplines") {
          console.log("area 2");
          // Main and secondary areas both selected.  Show both in description area and 
          // query for faculty who meet both criteria

          $.ajax({url: "https://ws.engr.illinois.edu/directory/list.asp?unit=1538&id=$path[1]&mainareaname=" + MainArea + "&areaname=" + SecondaryArea + "&template=2640", success: function(result) {
            result = result.replace(/document.write\(\'/g, '');
            result = result.replace(/\'\);/g, '');
            result = result.replace(/\\/g, '');
            result = result.replace('class="row"', '');
            result = result.substring(0, result.indexOf('function ShowTab('));

            if (result.length < 300) {
              result = result_empty_description;
            }
console.log("." + result + ".");
            $(".faculty-explorer--result--faculty").html(result);
          }});
        }
        else if (MainArea != "all-animals" && SecondaryArea == "all-disciplines") {
          console.log("area 3");
          // Main area only selected.  Show it in description area and 
          // query for faculty who work with that area
          $.ajax({url: "https://ws.engr.illinois.edu/directory/list.asp?unit=1538&id=$path[1]&mainareaname=" + MainArea + "&template=2640", success: function(result) {
            result = result.replace(/document.write\(\'/g, '');
            result = result.replace(/\'\);/g, '');
            result = result.replace(/\\/g, '');
            result = result.replace('class="row"', '');
            result = result.substring(0, result.indexOf('function ShowTab('));

            if (result.length < 300) {
              result = result_empty_description;
            }

            $(".faculty-explorer--result--faculty").html(result);
          }});
        }
        else if (MainArea == "all-animals" && SecondaryArea != "all-disciplines") {
          console.log("area 4");
          // Secondary area only selected.  Show it in description area and 
          // query for faculty who work with that area

          $.ajax({url: "https://ws.engr.illinois.edu/directory/list.asp?unit=1538&id=$path[1]&areaname=" + SecondaryArea + "&template=2640", success: function(result) {
            result = result.replace(/document.write\(\'/g, '');
            result = result.replace(/\'\);/g, '');
            result = result.replace(/\\/g, '');
            result = result.replace('class="row"', '');
            result = result.substring(0, result.indexOf('function ShowTab('));

            if (result.length < 300) {
              result = result_empty_description;
            }

            $(".faculty-explorer--result--faculty").html(result);
          }});
        }
        else {
console.log('You should not be here');
          // Something is wrong.  This should never execute.  This is here because sometimes stuff happens.
          $('.faculty-explorer--result--descriptions').html('');
          $('.faculty-explorer--result--faculty').html() = '';
        }

      };

/*
      function displayResults() {
        // Find the faculty that meet the criteria they've selected.  
        // If they've selected nothing, display the filler text

        if ($("input[name='animal']:checked").val() == "all-animals" && $("input[name='discipline']:checked").val() == "all-disciplines") {
          // Nothing selected.  Display filler text.
          var ResultTitle = default_result_title;
          ResultDescription = default_result_description;

          main_area_description = '<div class=\"faculty-explorer--result--area\"><div class=\"faculty-explorer--result--area-description--image\"><img src=\"\/themes\/contrib\/illinois_framework_theme\/images\/block-i.jpg\"><\/div>';
          main_area_description += '<div class=\"faculty-explorer--result--area-description--text\"><div class=\"faculty-explorer--result--area-description--text--title\">' + ResultTitle + '<\/div>';
          main_area_description += '<div class=\"faculty-explorer--result--area-description--text--description\">' + ResultDescription + '<\/div><\/div><\/div>';

          $('.faculty-explorer--result--descriptions').html(main_area_description);
          $(".faculty-explorer--result--faculty").html('');
        }
        else if ($('#faculty-explorer--main-area-select').val() != "0" && $('#faculty-explorer--secondary-area-select').val() != "0") {
          // Main and secondary areas both selected.  Show both in description area and 
          // query for faculty who meet both criteria

          main_area = main.filter(function (main_item) { return main_item.id == $('#faculty-explorer--main-area-select').val()});
          secondary_area = secondary.filter(function (secondary_item) { return secondary_item.id == $('#faculty-explorer--secondary-area-select').val()});

          var MainArea = main_area[0].title;
          var MainAreaImage = main_area[0].image;
          var SecondaryArea = secondary_area[0].title;
          var SecondaryAreaImage = secondary_area[0].image;
          
          main_area_description = '<div class=\"faculty-explorer--result--area\"><div class=\"faculty-explorer--result--area-description--image\"><img src=\"\/themes\/contrib\/illinois_framework_theme\/images\/' + MainAreaImage + '\"><\/div>';
          main_area_description += '<div class=\"faculty-explorer--result--area-description--text\"><div class=\"faculty-explorer--result--area-description--text--title\">' + MainArea + '<\/div>';
          main_area_description += '<div class=\"faculty-explorer--result--area-description--text--description\">' + main_area[0].description + '<\/div><\/div><\/div>';

          secondary_area_description = '<div class=\"faculty-explorer--result--area\"><div class=\"faculty-explorer--result--area-description--image\"><img src=\"\/themes\/contrib\/illinois_framework_theme\/images\/' + SecondaryAreaImage + '\"><\/div>';
          secondary_area_description += '<div class=\"faculty-explorer--result--area-description--text\"><div class=\"faculty-explorer--result--area-description--text--title\">' + SecondaryArea + '<\/div>';
          secondary_area_description += '<div class=\"faculty-explorer--result--area-description--text--description\">' + secondary_area[0].description + '<\/div><\/div><\/div>';

          $('.faculty-explorer--result--descriptions').html(main_area_description + secondary_area_description);
          
          $.ajax({url: "https://ws.engr.illinois.edu/directory/list.asp?unit=1538&id=$path[1]&mainareaname=" + MainArea + "&areaname=" + SecondaryArea + "&template=2640", success: function(result) {
            result = result.replace(/document.write\(\'/g, '');
            result = result.replace(/\'\);/g, '');
            result = result.replace(/\\/g, '');
            result = result.replace('class="row"', '');
            result = result.substring(0, result.indexOf('function ShowTab('));

            if (result.length < 300) {
              result = result_empty_description;
            }

            var faculty_output = '<div class=\"faculty-explorer--result--faculty--title\">Faculty studying ' + MainArea.toLowerCase() + ' and ' + SecondaryArea.toLowerCase() + '</div>' + result;

            $(".faculty-explorer--result--faculty").html(faculty_output);
          }});
        }
        else if ($('#faculty-explorer--main-area-select').val() != "0" && $('#faculty-explorer--secondary-area-select').val() == "0") {
          // Main area only selected.  Show it in description area and 
          // query for faculty who work with that area
          main_area = main.filter(function (main_item) { return main_item.id == $('#faculty-explorer--main-area-select').val()});

          var MainArea = main_area[0].title;
          var MainAreaImage = main_area[0].image;

          main_area_description = '<div class=\"faculty-explorer--result--area\"><div class=\"faculty-explorer--result--area-description--image\"><img src=\"\/themes\/contrib\/illinois_framework_theme\/images\/' + MainAreaImage + '\"><\/div>';
          main_area_description += '<div class=\"faculty-explorer--result--area-description--text\"><div class=\"faculty-explorer--result--area-description--text--title\">' + MainArea + '<\/div>';
          main_area_description += '<div class=\"faculty-explorer--result--area-description--text--description\">' + main_area[0].description + '<\/div><\/div><\/div>';

          $('.faculty-explorer--result--descriptions').html(main_area_description);
          
          $.ajax({url: "https://ws.engr.illinois.edu/directory/list.asp?unit=1538&id=$path[1]&mainareaname=" + MainArea + "&template=2640", success: function(result) {
            result = result.replace(/document.write\(\'/g, '');
            result = result.replace(/\'\);/g, '');
            result = result.replace(/\\/g, '');
            result = result.replace('class="row"', '');
            result = result.substring(0, result.indexOf('function ShowTab('));

            if (result.length < 300) {
              result = result_empty_description;
            }

            var faculty_output = '<div class=\"faculty-explorer--result--faculty--title\">Faculty studying ' + MainArea.toLowerCase() + '</div>' + result;

            $(".faculty-explorer--result--faculty").html(faculty_output);
          }});
        }
        else if ($('#faculty-explorer--main-area-select').val() == "0" && $('#faculty-explorer--secondary-area-select').val() != "0") {
          // Secondary area only selected.  Show it in description area and 
          // query for faculty who work with that area
          secondary_area = secondary.filter(function (secondary_item) { return secondary_item.id == $('#faculty-explorer--secondary-area-select').val()});

          var SecondaryArea = secondary_area[0].title;
          var SecondaryAreaImage = secondary_area[0].image;

          secondary_area_description = '<div class=\"faculty-explorer--result--area\"><div class=\"faculty-explorer--result--area-description--image\"><img src=\"\/themes\/contrib\/illinois_framework_theme\/images\/' + SecondaryAreaImage + '\"><\/div>';
          secondary_area_description += '<div class=\"faculty-explorer--result--area-description--text\"><div class=\"faculty-explorer--result--area-description--text--title\">' + SecondaryArea + '<\/div>';
          secondary_area_description += '<div class=\"faculty-explorer--result--area-description--text--description\">' + secondary_area[0].description + '<\/div><\/div><\/div>';

          $('.faculty-explorer--result--descriptions').html(secondary_area_description);
          
          $.ajax({url: "https://ws.engr.illinois.edu/directory/list.asp?unit=1538&id=$path[1]&areaname=" + SecondaryArea + "&template=2640", success: function(result) {
            result = result.replace(/document.write\(\'/g, '');
            result = result.replace(/\'\);/g, '');
            result = result.replace(/\\/g, '');
            result = result.replace('class="row"', '');
            result = result.substring(0, result.indexOf('function ShowTab('));

            if (result.length < 300) {
              result = result_empty_description;
            }

            var faculty_output = '<div class=\"faculty-explorer--result--faculty--title\">Faculty studying ' + SecondaryArea.toLowerCase() + '</div>' + result;

            $(".faculty-explorer--result--faculty").html(faculty_output);
          }});
        }
        else {
console.log('You should not be here');
          // Something is wrong.  This should never execute.  This is here because sometimes stuff happens.
          $('.faculty-explorer--result--descriptions').html('Start Exploring');
          $('.faculty-explorer--result--faculty').html() = '';
        }

      };

*/
      // trigger by event
      $('.small-12 .category-description-wrapper a.reveal-link').trigger('click');
      $('.small-12 .category-description-wrapper a.close-reveal-modal').trigger('click');