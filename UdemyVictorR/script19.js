/* Muestra todos los nu,eros divisores de un numero que se mete en un promt */


let number = parseInt(prompt("Agrega el numero"))

for (let i = 0; i <= number; i++) {
    if ((number % i) === 0) {
        console.log("el numero " + i + " es divisor" + " de " + number)
    }
}



