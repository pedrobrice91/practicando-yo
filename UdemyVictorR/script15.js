/* Muestra la suma y la media de los numeros introducidos 
hasta introducir un numero negativo y ahi mostrar el resultado

Por ejemplo, el usuario podría hacer algo como:
Introducir 5
Luego 10
Luego 3
Luego 7
Finalmente -1 (número negativo que detiene el programa)

El programa entonces calcularía:

Suma: 5 + 10 + 3 + 7 = 25
Media: 25 ÷ 4 = 6.25
*/

let numberOne;
let contador = 0;
let numeroSumado = 0;
do {
    numberOne = parseInt(prompt("Introduce un numero"))

    if (numberOne > 0) {
        numeroSumado += numberOne
        contador++

    } else {
        
        console.log("la media es " + numeroSumado / contador)
        console.log("la suma es " + numeroSumado)
    }
} while (numberOne > 0)