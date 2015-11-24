$("body").click(function() {
  $(".letter").hide().fadeIn("slow");
});

// $(document).ready(function() {
//   $("p").hide();
// });
//
// $("body").click(function() {
//   $(".letter").hide().fadeIn("slow", function(){
//     $("#p1").click(function() {
//       $fadeIn("slow");
//     });
//   });
// });


$("body").click(function() {
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'NorthernIsles.ogg');
  audioElement.setAttribute('autoplay', 'autoplay');

  $("body").click(
    function() {
      audioElement.play();
    },
    function() {
      audioElement.pause();
  });
});

// set p's to hidden

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
