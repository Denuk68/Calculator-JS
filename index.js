let a = "";// first number
let b = "";// second number
let sign = ""; //  operation sign
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', "x", '/', "+/-"];

// screen
const out = document.querySelector('.calc-screen p');

function clearAll() {
    a = "";
    b = "";
    sign = "";
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    // не натиснута  кнопка
    if (!event.target.classList.contains("btn")) return;
    //  натиснута  кнопка АС
    if (event.target.classList.contains("ac")) return;

    out.textContent = '';
    // отримую натиснуту кнопку
    const key = event.target.textContent;

    // провіряю чи натиснута кнопка 0-9 чи .
    if (digit.includes(key)) {
        if (b === "" && sign === "") {
            a += key;
            out.textContent = a;
        }
        else if (a !== "" && b !== "" && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.log(a, sign, b)
        return
    }

    // провірка  операції + - / * 
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(a, sign, b)
        return;
    }

    // натиснутий знак =
    if (key === "=") {
        if (b === "") b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "x":
                a = a * b;
                break;
            case "/":
                if (b === '0') {
                    out.textContent = "Помилка";
                    a = "";
                    b = "";
                    sign = "";
                    return
                }
                a = a / b;
                break;

        }
        finish = true;
        out.textContent = a;
        console.log(a, sign, b)
    }

}