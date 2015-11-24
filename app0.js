$(document).ready(function() {
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'Dark-Amb.mp3');
  audioElement.setAttribute('autoplay', 'autoplay');
  audioElement.play();
});

$(document).ready(function() {
  $("#subtitle").hide();
});

$(document).ready(function() {
  $("#title").hide().fadeIn(4000, function() {
    $("#subtitle").fadeIn(2000);
  });
});
