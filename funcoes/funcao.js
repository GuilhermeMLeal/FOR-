const soma = (
    function (a, b) {
        return a - b
    }
)(1, 2);
console.log(soma)

let calc = function calc(operador, num1, num2) {
    return operador (num1, num2);
}

let somar = function (num1, num2) {
    return num1 + num2;
}

let dividir = function (num1, num2) {
    return num1 / num2;
}

let multiplicar = function (num1,num2 ) {
    return num1 * num2;
}
let subtrair = function (num1,num2 ) {
    return num1 - num2;
}


 console.log(calc(somar, 1, 2));
let resultdivi = calc(dividir, 2, 3);
let resultmult = calc(multiplicar, 2, 3);
let resultSub = calc(subtrair, 2, 3);


console.log(resultdivi);
console.log(resultmult);
console.log(resultSub);

function showArgs(){
    return calc(arguments)
}

