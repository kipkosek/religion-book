var animateReviews = function() {
  var slideInReview = function() {
    $(this).css({
      transform: "translateX(0%)"
    });
  };
  $.each($(".review-item"), slideInReview);
};

$("#dropbtn").click(function() {
  $("#dropdown-menu").toggle();
});

$(window).on("load", function() {
  $("#title").hide().fadeIn(1000);
  $("#description").hide().delay(1000).fadeIn(1000);
  $("#intro").hide().delay(2000).fadeIn(1000);

  var scrollDistance = $("#reviews-list").offset().top - $(window).height() + 200;

  $(window).scroll(function(event) {
    if ($(window).scrollTop() >= scrollDistance) {
      animateReviews();
    }
  });
});
