let btnRight = document.getElementById("btnRight");
let btnLeft = document.getElementById("btnLeft");
let btnAllRight = document.getElementById("btnAllRight");
let btnAllLeft = document.getElementById("btnAllLeft");
let firstSelect = document.getElementById("lstBox1");
let secondSelect = document.getElementById("lstBox2");

btnRight.addEventListener("click", () => moveAcross(firstSelect, secondSelect));
btnLeft.addEventListener("click", () => moveAcross(secondSelect, firstSelect));
btnAllRight.addEventListener('click', () => moveAll(firstSelect, secondSelect));
btnAllLeft.addEventListener('click', () => moveAll(secondSelect, firstSelect));

function moveAcross(src, dest) {
    if (src.options.selectedIndex === -1) {
        alert('Nothing to move!!!');
        return;
    }
    Array.from(src.options).forEach(option => {
        if (option.selected) {
            dest.add(option);
        }
    });
    src.selectedIndex = -1;
    dest.selectedIndex = -1;
}

function moveAll(src, dest) {
    if (src.options.length === 0) {
        alert('Nothing to move!!!');
        return;
    }
    for (let count = 0; count < src.options.length; count++) {
        Array.from(src.options).forEach(option => {
           dest.add(option);
        });
        src.selectedIndex = -1;
        dest.selectedIndex = -1;
    }
}
