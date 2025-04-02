/* mostrar todos los numeros impares que hay entre dos numeros que nos de el usuario */

let number1;
let number2;

number1 = parseInt(prompt("Introduce el primer numero"));
number2 = parseInt(prompt("Introduce el segundo numero"));

for (let i = 0; number1 <= number2; number1++){
    if ((number1 % 2) === 0){
    }else
        console.log("El numero "+ number1 + " es impar")
}
