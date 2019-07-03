let galleryButton = document.getElementById("gallery-button");
let firstPageTimer = document.querySelector('#first-page-time');
let secondPageTimer = document.querySelector('#second-page-time');
let thirdPageTimer = document.querySelector('#third-page-time');
let buttonStartStop = document.querySelector('#timer-button');
let firstPageNextButton = document.querySelector('#first-page-next-button');
let secondPageNextButton = document.querySelector('#second-page-next-button');
let secondPagePrevButton = document.querySelector('#second-page-prev-button');
let thirdPagePrevButton = document.querySelector('#third-page-prev-button');
let id;

if (galleryButton) {
    galleryButton.addEventListener('click', openGallery);

}

if (firstPageTimer) {
    firstPageNextButton.addEventListener('click', () => {
        window.open('second.html', '_self');
    });
}

if (secondPageTimer) {
    secondPagePrevButton.addEventListener('click', () => {
        window.open('first.html', '_self');
    });
}

if (secondPageNextButton) {
    secondPageNextButton.addEventListener('click', () => {
        window.open('third.html', '_self');
    });
}

if (thirdPagePrevButton) {
    thirdPagePrevButton.addEventListener('click', () => {
        window.open('second.html', '_self');
    });
}

function stop() {
        clearInterval(id);
        buttonStartStop.removeEventListener('click', stop);
        buttonStartStop.addEventListener('click', start);
        buttonStartStop.innerHTML = 'resume';
}

function start() {
    if (thirdPageTimer) {
        id = setInterval(function () {
            thirdPageTimer.innerHTML -= 1;
            if (thirdPageTimer.textContent === '0') {
                if (window.confirm("To show gallery again - ok, close window - cancel.")) {
                    window.location.assign("first.html");
                } else {
                    window.close();
                }
            }
        }, 1000);
        changeButtonCharacteristics();
    } else if (secondPageTimer) {
        id = setInterval(function () {
            secondPageTimer.innerHTML -= 1;
            if (secondPageTimer.textContent === '0') {
                window.open('third.html', "_self");
            }
        }, 1000);
        changeButtonCharacteristics();
    } else if (firstPageNextButton) {
        id = setInterval(function () {
            firstPageTimer.innerHTML -= 1;
            if (firstPageTimer.textContent === '0') {
                window.open('second.html', "_self");
            }
        }, 1000);
        changeButtonCharacteristics();
    }
}

function changeButtonCharacteristics() {
    buttonStartStop.removeEventListener('click', start);
    buttonStartStop.addEventListener('click', stop);
    buttonStartStop.innerHTML = 'pause';
}

function openGallery() {
    window.open('first.html', '_blank');
}

window.onload = start;