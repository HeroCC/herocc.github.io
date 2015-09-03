$('html').addClass('js');

$(document).ready(function() { // More Button
  // Hide the "view" div.
  $("#more-btn").hide();
  // Watch for clicks on the "slide" link.
  $('#toggle').click(function() {
    // When clicked, toggle the "view" div.
    $('#more-btn').slideToggle(400);
    return false;
  });
});

function hoverChanger(element, changeTo) {
  var toChange = element.getElementsByTagName("span")[0];
  toChange.innerHTML = changeTo;
};
