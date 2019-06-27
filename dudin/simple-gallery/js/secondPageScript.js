let timer = document.querySelector('#time');
let buttonStart = document.querySelector('#timer-button');
let nextButton =document.querySelector('#next-page-button');
let prevButton =document.querySelector('#prev-page-button');
let id;

prevButton.addEventListener('click', () => {
    window.open('first.html', '_self');
});
nextButton.addEventListener('click', () => {
    window.open('third.html', '_self');
});

window.onload = start;

function start() {
    id = setInterval(function () {
        timer.innerHTML -= 1;
        if (timer.textContent === '0') {
            window.open('third.html', "_self");
        }
    }, 1000);


    buttonStart.removeEventListener('click', start);
    buttonStart.addEventListener('click', stop);

    buttonStart.innerHTML = 'pause';
}

function stop() {
    clearInterval(id);

    buttonStart.removeEventListener('click', stop);
    buttonStart.addEventListener('click', start);

    buttonStart.innerHTML = 'resume';
}
