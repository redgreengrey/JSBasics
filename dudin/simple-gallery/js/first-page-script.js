let timer = document.querySelector('#time');
let buttonStart = document.querySelector('#timer-button');
let nextButton = document.querySelector('#next-page-button');
let id;

nextButton.addEventListener('click', () => {
    window.open('second.html', '_self');
});

window.onload = start;

function start() {
    id = setInterval(function () {
        timer.innerHTML -= 1;
        if (timer.textContent === '0') {
            window.open('second.html', "_self");
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
