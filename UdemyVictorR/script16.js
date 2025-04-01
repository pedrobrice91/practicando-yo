/* Escriba un programa que indique la tabla de multiplicar del numero que indique el usuario */


let number ;

number = parseInt(prompt(`Ingresa el numero que quieres multiplicar`))

if (isNaN(number))
    console.log("Debes ingresar un numero")
else {
    for (let i = 1; i < 10; i++ ){
    console.log(number + " X " + i + ":" +(number*i))
}
}
