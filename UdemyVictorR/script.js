let name = prompt("Dinos tu nombre")

let peso = prompt("Dinos tu peso")
peso = parseFloat(peso)

let altura = prompt("Dinos tu altura")
altura = parseFloat(altura)

let altura2 = altura*2

let imc = peso / altura2

console.log(`Hola ${name}, tu IMC es: ${imc.toFixed(2)}`);

/* 
altura2 = 1.75 * 1.75 = 3.0625

imc = 68.5 / 3.0625 = 22.36

Y mostrará:

"Hola [nombre], tu IMC es: 22.36" */