$(document).ready(function() {
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'asianoriental1.ogg');
  audioElement.setAttribute('autoplay', 'autoplay');
  audioElement.play();
});

$(document).ready(function() {
  $("p").hide();
});

$(document).ready(function() {
  $(".one").hide().fadeIn(5000, function() {
    $(".two").fadeIn(3000, function() {
      $(".three").fadeIn(5000, function () {
        $(".four").fadeIn(3000, function () {
          $(".five").fadeIn(3000, function () {
            $(".six").fadeIn(3000, function () {
              $(".seven").fadeIn(3000);
            });
          });
        });
      });
    });
  });
});
