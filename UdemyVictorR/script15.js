/* Calculadora: 
pida dos numeros por pantalla
si metemos uno mal que nos los vuelva a pedir
en una alerta y por la consola el resultado de 
sumar, restar, multiplicar y dividir esas dos cifras */

let number1;
let number2;

while ((isNaN(number1) || isNaN(number2)) || (isNaN(number2) || isNaN(number1))) {

    number1 = parseInt(prompt("Ingresa un numero"))
    number2 = parseInt(prompt("Ingresa un numero"))

    if ((number1 > 0) && (number2 > 0)) {
        console.log(number1 + " + " + number2 + " = " + (number1 + number2))
        console.log(number1 + " - " + number2 + " = " + (number1 - number2))
        console.log(number1 + " * " + number2 + " = " + (number1 * number2))
        console.log(number1 + " / " + number2 + " = " + (number1 / number2))

        alert(`${number1} + ${number2}`)
        alert(`${number1} - ${number2}`)
        alert(`${number1} * ${number2}`)
        alert(`${number1} / ${number2}`)

    } else {
        alert("Intenta de nuevo")
    }

}



