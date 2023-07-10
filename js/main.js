const body = document.querySelector('body')
body.style.background = `url('/images/${0}.jpg')`
body.style.backgroundSize = "500%"
body.style.backgroundPosition = ''
body.style.transition = '0.5s'

let i = 1;
setInterval(() => {
    body.style.background = `url('/images/${i}.jpg')`
    i++;
    body.style.backgroundSize = "500%"
    body.style.backgroundPosition = ''
    body.style.transition = '0.5s'
    if(i==38){
        i = 0;
    }
}, 5000);