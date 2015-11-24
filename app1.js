$("body").click(function() {
  $(".letter").hide().fadeIn("slow");
  console.log('hello');
});

$("body").click(function() {
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'NorthernIsles.ogg');
  audioElement.setAttribute('autoplay', 'autoplay');

  $('.letter').click(function() {
      audioElement.play();
  });
});

// set html p's to hidden

// $(".letter").click(function() {
//   $("#p1").hide().fadeIn("slow");
// });

// $(".letter").click(function() {
//   $("#p2").hide().fadeIn("slow");
// });

// $(".letter").click(function() {
//   $("#p3").hide().fadeIn("slow");
// });

// $(".letter").click(function() {
//   $("#p4").hide().fadeIn("slow");
// });

// $(".letter").click(function() {
//   $("#p5").hide().fadeIn("slow");
// });

// $(".letter").click(function() {
//   $("#p6").hide().fadeIn("slow");
// });

// $(".letter").click(function() {
//   $("#p7").hide().fadeIn("slow");
// });

// $(".letter").click(function() {
//   $("#p8").hide().fadeIn("slow");
// });
