
/* Solicitar al usuario que indique dos numeros 
y que nos diga cual es el mayor, el menor y
 si son iguales 
 Plus:si los numeros no son numeros o son menores
  o iguales a cero nos vuelva a pedir 
 */

  let number, number1;

do {
number = parseInt(prompt("Indiqueme el primer numero"))
number1 = parseInt(prompt("Indiqueme el segundo numero"))

     if (number > number1) {
        console.log("El numero " + number + " es mayor")
    } else if (number1 > number) {
        console.log("El numero " + number1 + " es mayor")
    } else if (number1 === number) {
        console.log("Los numeros son iguales")
    }else {
        console.log("ERROR; Vuelve a ingresar los numeros")
    }
}
while (!isNaN(number) || !isNaN(number1)) 

/// Corregir cuando escribo dos letras iguales