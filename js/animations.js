$('html').addClass('js');
$(document).ready(function() {
      // Hide the "view" div.
      $("#more-btn").hide();
      // Watch for clicks on the "slide" link.
      $('#toggle').click(function() {
        // When clicked, toggle the "view" div.
        $('#more-btn').slideToggle(400);
        return false;
    });
  });
