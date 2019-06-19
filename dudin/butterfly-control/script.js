let btnRight = document.getElementById("btnRight");
let btnLeft = document.getElementById("btnLeft");
let btnAllRight = document.getElementById("btnAllRight");
let btnAllLeft = document.getElementById("btnAllLeft");

btnRight.addEventListener("click", () => {
    moveAcross("lstBox1", 'lstBox2');
}, false);
btnLeft.addEventListener("click", () => {
    moveAcross('lstBox2', 'lstBox1');
}, false);
btnAllRight.addEventListener('click', () => {
    moveAll('lstBox1', 'lstBox2');
}, false);
btnAllLeft.addEventListener('click', () => {
    moveAll('lstBox2', 'lstBox1');
}, false);

function moveAcross(sourceID, destID) {
    let src = document.getElementById(sourceID);
    let dest = document.getElementById(destID);
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
            src.remove(count, null);
            count--;
        }
    }

}

function moveAll(sourceID, destID) {
    let src = document.getElementById(sourceID);
    let dest = document.getElementById(destID);
    if (src.options.length === 0) {
        alert('Nothing to move!!!');
        return;
    }
    for (let i = 0; i < src.options.length; i++) {
        src.options[i].setAttribute("selected", '');
    }
    for (let count = 0; count < src.options.length; count++) {
        let option = src.options[count];
        let newOption = document.createElement("option");
        newOption.value = option.value;
        newOption.text = option.text;
        dest.add(newOption, null);
        src.remove(count, null);
        count--;
    }
}

function create() {
    let option = src.options[count];
    let newOption = document.createElement("option");
    newOption.value = option.value;
    newOption.text = option.text;
    dest.add(newOption, null);
    src.remove(count, null);
    count--;
}
