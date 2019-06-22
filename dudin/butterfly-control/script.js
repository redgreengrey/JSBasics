let btnRight = document.getElementById("btnRight");
let btnLeft = document.getElementById("btnLeft");
let btnAllRight = document.getElementById("btnAllRight");
let btnAllLeft = document.getElementById("btnAllLeft");
let firstSelect = document.getElementById("lstBox1");
let secondSelect = document.getElementById("lstBox2");

btnRight.addEventListener("click", () => {
    moveAcross(firstSelect, secondSelect);
});
btnLeft.addEventListener("click", () => {
    moveAcross(secondSelect, firstSelect);
});
btnAllRight.addEventListener('click', () => {
    moveAll(firstSelect, secondSelect);
});
btnAllLeft.addEventListener('click', () => {
    moveAll(secondSelect, firstSelect);
});

function moveAcross(src, dest) {
    if (src.options.selectedIndex === -1) {
        alert('Nothing to move!!!');
        return;
    }
    for (let count = 0; count < src.options.length; count++) {
        if (src.options[count].selected === true) {
            let option = src.options[count];
            let newOption = document.createElement("option");
            newOption.value = option.value;
            newOption.text = option.text;
            dest.add(newOption, null);
            if (newOption.selected === true) {
                newOption.setAttribute("selected", '');
            }
            src.remove(count, null);
            count--;
        }
    }
}

function moveAll(src, dest) {
    if (src.options.length === 0) {
        alert('Nothing to move!!!');
        return;
    }
    for (let count = 0; count < src.options.length; count++) {
        src.options[count].setAttribute("selected", '');
        let option = src.options[count];
        let newOption = document.createElement("option");
        newOption.value = option.value;
        newOption.text = option.text;
        dest.add(newOption, null);
        src.remove(count, null);
        count--;
    }
}
