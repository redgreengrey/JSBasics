function notEval() {
    let str = document.getElementById("Expression").value;
    str = str.replace(/\s/g, '');
    str = str.replace(/\=/g, '');

    let chars = str.split("");
    let n = [], op = [], index = 0, oplast = true;

    n[index] = "";

    for (let c = 0; c < chars.length; c++) {

        if (isNaN(parseInt(chars[c])) && chars[c] !== "." && !oplast) {
            op[index] = chars[c];
            index++;
            n[index] = "";
            oplast = true;
        } else {
            n[index] += chars[c];
            oplast = false;
        }
    }

    string = parseFloat(n[0]);
    for (let o = 0; o < op.length; o++) {
        let num = parseFloat(n[o + 1]);
        switch (op[o]) {
            case "+":
                string += num;
                break;
            case "-":
                string -= num;
                break;
            case "*":
                string *= num;
                break;
            case "/":
                string /= num;
                break;
        }
    }

    document.getElementById("outputResult").value = string.toFixed(2);
}