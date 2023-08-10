var audio = new Audio("/assets/ncm.mp3")

var body = document.querySelector("body");

body.addEventListener("mouseenter", function() {
  audio.play()
})
body.addEventListener("touchstart", function() {
  audio.play()
})

function hasQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.has(name);
}

if (hasQueryParam('fbclid')) {
  gtag('event', 'custom_event', {
      event_category: 'FBCLID',
      event_label: 'fbclid_present'
  });
}