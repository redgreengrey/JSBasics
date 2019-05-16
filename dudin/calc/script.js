function sequenceCalculate() {
    let expression = document.getElementById("Expression").value;
    let lastChar = expression[expression.length - 1];
    let output = document.getElementById("outputResult");
    let incorrectInput = "Enter correct expression";

    expression = expression.replace(/\s=/g, '');

    let chars = expression.split(""),
        numbers = [],
        operators = [],
        index = 0,
        isOperatorLast = true;
    let lettersRegex = /[A-zА-я]/g,
        found = expression.match(lettersRegex);

    if (lastChar !== '=' || found !== null) {
        output.value = incorrectInput;
    } else {
        numbers[index] = "";

        for (let i = 0; i < chars.length; i++) {
            if (isNaN(parseInt(chars[i])) && chars[i] !== "." && !isOperatorLast) {
                operators[index] = chars[i];
                index++;
                numbers[index] = "";
                isOperatorLast = true;
            } else {
                numbers[index] += chars[i];
                isOperatorLast = false;
            }
        }

        let result = parseFloat(parse(operators, numbers).toFixed(2));
        if (isNaN(result)) {
            output.value = incorrectInput;
        } else {
            output.value = parse(operators, numbers).toFixed(2);
        }
    }
}

function parse(operators, numbers) {
    let string = parseFloat(numbers[0]);
    for (let i = 0; i < operators.length; i++) {
        let number = parseFloat(numbers[i + 1]);
        switch (operators[i]) {
            case "+":
                string += number;
                break;
            case "-":
                string -= number;
                break;
            case "*":
                string *= number;
                break;
            case "/":
                string /= number;
                break;
        }
    }
    return string;
}

document.getElementById("Expression").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("button-id").click();
    }
});