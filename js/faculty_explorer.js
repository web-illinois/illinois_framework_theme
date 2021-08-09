      var $ = jQuery;

      $("input[name='animal']:radio").change(function() {
        displayResultsDirectory();

      });

      $( document ).ready(function() {
        displayResultsDirectory();
      });

      $("input[name='discipline']:radio").change(function() {
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
          var newLink = "/directory/faculty-members";
          $(".faculty-explorer--directory-button").text("View all faculty members");
          $(".faculty-explorer--directory-button").attr("href", newLink);
        }
        else if (activeAnimal != '' && activeDiscipline != '') {
          var newLink = "/directory/faculty-members?animal=" + activeAnimal + "&discipline=" + activeDiscipline;
          $(".faculty-explorer--directory-button").text("View faculty studying " + activeDiscipline.replace('-', ' ') + " in " + activeAnimal.replace('-', ' '));
          $(".faculty-explorer--directory-button").attr("href", newLink);
        }
        else if (activeAnimal != '') {
          var newLink = "/directory/faculty-members?animal=" + activeAnimal;
          $(".faculty-explorer--directory-button").text("View faculty studying " + activeAnimal.replace('-', ' '));
          $(".faculty-explorer--directory-button").attr("href", newLink);
        }
        else if (activeDiscipline != '') {
          var newLink = "/directory/faculty-members?discipline=" + activeDiscipline;
          $(".faculty-explorer--directory-button").text("View faculty studying " + activeDiscipline.replace('-', ' '));
          $(".faculty-explorer--directory-button").attr("href", newLink);
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

        if (faculty_explorer_type == 'Advisor') {
          var template = 2657;
        }
        else {
          var template = 2640;
        }

        var MainArea = $("input[name='animal']:checked").val();
        var SecondaryArea = $("input[name='discipline']:checked").val();

        if (MainArea == "all-animals" && SecondaryArea == "all-disciplines") {
          // Nothing selected.  Display filler text.
console.log(faculty_explorer_type );
console.log(template  );

          $.ajax({url: "https://ws.engr.illinois.edu/directory/list.asp?unit=1538&id=$path[1]&cat=15&template=" + template, success: function(result) {
            result = result.replace(/document.write\(\'/g, '');
            result = result.replace(/\'\);/g, '');
            result = result.replace(/\\/g, '');
            result = result.replace('class="row"', '');
            result = result.substring(0, result.indexOf('function ShowTab('));

            if (result.length < 300) {
              result = result_empty_description;
            }
            $(".faculty-explorer--result--faculty--title").text("Faculty in Animal Sciences");
            $(".faculty-explorer--result--faculty").html(result);
          }});

        }
        else if (MainArea != "all-animals" && SecondaryArea != "all-disciplines") {
          // Main and secondary areas both selected.  Show both in description area and 
          // query for faculty who meet both criteria

          $.ajax({url: "https://ws.engr.illinois.edu/directory/list.asp?unit=1538&id=$path[1]&cat=15&mainareaname=" + MainArea + "&areaname=" + SecondaryArea + "&template=" + template, success: function(result) {
            result = result.replace(/document.write\(\'/g, '');
            result = result.replace(/\'\);/g, '');
            result = result.replace(/\\/g, '');
            result = result.replace('class="row"', '');
            result = result.substring(0, result.indexOf('function ShowTab('));

            if (result.length < 300) {
              result = result_empty_description;
            }
            $(".faculty-explorer--result--faculty--title").text("Faculty in Animal Sciences studying " + SecondaryArea + " in " + MainArea);
            $(".faculty-explorer--result--faculty").html(result);
          }});
        }
        else if (MainArea != "all-animals" && SecondaryArea == "all-disciplines") {
          // Main area only selected.  Show it in description area and 
          // query for faculty who work with that area
          $.ajax({url: "https://ws.engr.illinois.edu/directory/list.asp?unit=1538&id=$path[1]&cat=15&mainareaname=" + MainArea + "&template=" + template, success: function(result) {
            result = result.replace(/document.write\(\'/g, '');
            result = result.replace(/\'\);/g, '');
            result = result.replace(/\\/g, '');
            result = result.replace('class="row"', '');
            result = result.substring(0, result.indexOf('function ShowTab('));

            if (result.length < 300) {
              result = result_empty_description;
            }

            $(".faculty-explorer--result--faculty--title").text("Faculty in Animal Sciences studying " + MainArea);
            $(".faculty-explorer--result--faculty").html(result);
          }});
        }
        else if (MainArea == "all-animals" && SecondaryArea != "all-disciplines") {
          // Secondary area only selected.  Show it in description area and 
          // query for faculty who work with that area

          $.ajax({url: "https://ws.engr.illinois.edu/directory/list.asp?unit=1538&id=$path[1]&cat=15&areaname=" + SecondaryArea + "&template=" + template, success: function(result) {
            result = result.replace(/document.write\(\'/g, '');
            result = result.replace(/\'\);/g, '');
            result = result.replace(/\\/g, '');
            result = result.replace('class="row"', '');
            result = result.substring(0, result.indexOf('function ShowTab('));

            if (result.length < 300) {
              result = result_empty_description;
            }

            $(".faculty-explorer--result--faculty--title").text("Faculty in Animal Sciences studying " + SecondaryArea);
            $(".faculty-explorer--result--faculty").html(result);
          }});
        }
        else {
          // Something is wrong.  This should never execute.  This is here because sometimes stuff happens.
          $(".faculty-explorer--result--faculty--title").text("Faculty in Animal Sciences");
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