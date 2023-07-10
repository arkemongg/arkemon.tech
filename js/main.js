const body = document.querySelector('body')
body.style.background = `url('/images/${0}.jpg')`
body.style.backgroundSize = "500%"
body.style.backgroundPosition = ''
body.style.transition = '0.5s'

const images = [];
let currentIndex = 0;

// Preload the images
for (let i = 0; i < 39; i++) {
  const image = new Image();
  image.src = `/images/${i}.jpg`;
  images.push(image);
}


function changeBackground() {
  body.style.background = `url('${images[currentIndex].src}')`;
  body.style.backgroundSize = '500%';
  body.style.backgroundPosition = '';
  body.style.transition = '0.5s';

  currentIndex = (currentIndex + 1) % images.length;
}

// Call changeBackground once to display the first image instantly
changeBackground();

// Preload the remaining images before starting the interval
let preloadingIndex = 1;
const preloadingInterval = setInterval(() => {
  const image = new Image();
  image.src = `/images/${preloadingIndex}.jpg`;
  images.push(image);

  preloadingIndex++;
  if (preloadingIndex === 39) {
    clearInterval(preloadingInterval);
    setInterval(changeBackground, 5000);
  }
}, 0);