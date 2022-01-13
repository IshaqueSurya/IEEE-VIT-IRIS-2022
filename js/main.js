$(document).ready(function () {
    $('.iris-letter').on('mouseover', function () {
        $(this).animate({
            fontSize: '3rem'
        }, "fast");
    });

    $('.iris-letter').on('mouseout', function () {
        $(this).animate({
            fontSize: '2rem'
        }, "fast");
    });


    $(".card-text").hide();

      $(".card").on("mouseenter", function () {
        $(this).find(".card-img-top").slideUp("slow");
        $(this).find(".card-text").slideDown("slow");
      });

      $(".card").on("mouseleave", function () {
        $(this).find(".card-img-top").slideDown("slow");
        $(this).find(".card-text").slideUp("slow");
      });
});
