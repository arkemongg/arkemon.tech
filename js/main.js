var audio = new Audio("/assets/ncm.mp3")

var body = document.querySelector("body");

body.addEventListener("mouseenter", function() {
  audio.play()
})
body.addEventListener("touchstart", function() {
  audio.play()
})

