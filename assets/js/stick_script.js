jQuery(document).ready(function() {

  var navOffset = jQuery(".left-side").offset().top + 30;

  jQuery(".left-side").wrap("<div class='left-placeholder'></div>");
  jQuery(".left-placeholder").width(jQuery(".left-side").outerWidth());
  // jQuery(".left-placeholder").height(jQuery(".left-side").outerHeight());

  jQuery(window).scroll(function() {
    var scrollPos =jQuery(window).scrollTop();
    if ((scrollPos + 30) >= navOffset) {
      jQuery(".left-side").addClass("fixed")
    } else {
      jQuery(".left-side").removeClass("fixed")
    }

  });


});
