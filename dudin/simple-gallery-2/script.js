function script(ticksCount) {
    let nextPage = getOtherPageUrl(true);
    let prevPage = getOtherPageUrl(false);
    let timerId;
    let timerArea = document.querySelector('#timerArea');

    let tick = 0;

    if (!!timerArea) {
        function timer() {
            return setTimeout(function () {
                window.clearTimeout(timerId);
                timerArea.innerHTML = ticksCount - tick;
                tick++;
                if (tick !== ticksCount + 1) {
                    timerId = timer();
                } else {
                    if (checkIfNextAccessible(nextPage)) {
                        window.open(nextPage);
                        window.close();
                    } else {
                        if (window.confirm("To show gallery again - ok, close window - cancel.")) {
                            window.location.assign("page-1.html");
                        } else {
                            window.close();
                        }
                    }
                }
            }, 1000);
        }

        timerId = timer();
    }

    document.querySelector('#stopBtn').onclick = function () {
        window.clearTimeout(timerId);
        timerId = undefined;
    };

    document.querySelector('#continueBtn').onclick = function () {
        if (timerId === undefined) {
            timerId = timer();
        }
    };

    document.querySelector('#nextBtn').onclick = function () {
        window.open(nextPage);
        window.close();
    };

    document.querySelector('#prevBtn').onclick = function () {
        window.open(prevPage);
        window.close();
    };
}

function checkIfNextAccessible(nextPage) {
    return nextPage !== 'page-8.html';
}

function getOtherPageUrl(forward) {
    let number = parseInt(window.location.pathname.split('page')[1].replace('-', '').replace('.html', ''));

    if (forward) {
        number++;
    } else {
        number--;
    }
    return 'page-' + number + '.html';
}

document.addEventListener("DOMContentLoaded", function () {
    script(5);
});