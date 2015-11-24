$(document).ready(function() {
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'Gloomycem.ogg');
  audioElement.setAttribute('autoplay', 'autoplay');
  audioElement.play();
});

$(document).ready(function() {
  $(".knocker").hide();
});

$("body").click(function() {
  $(".knocker").fadeIn(3000);
});
