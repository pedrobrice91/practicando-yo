/* Tengo una heladeria y cada bola de helado vale 1.8 eur

cuanto cuesta los helados de 1, 2, 3 bolas?

ten en cuenta que la barquilla cuesta 0.50 eur
*/

let helado = prompt("Indicame con cuantas bolas quieres tu helado");
helado = parseInt(helado)

let bola = 1.8;
let bola2 = 1.8 * 2
let bola3 = 1.8 * 3
let base = 0.50;

if (helado === 1) {
    alert("tu precio a pagar es de " + (bola + base) + " EUR")
} else if (helado === 2) {
    alert("tu precio a pagar es de " + (bola2 + base) + " EUR")
} else if (helado === 3) {
    alert("tu precio a pagar es de " + (bola3 + base) + " EUR")
} else {
    alert("Debes escojer 1, 2, o 3")
}

