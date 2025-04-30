/* 
Crea un programa que calcule el Índice de Masa Corporal (IMC) de una persona. 
El IMC se calcula con la fórmula:

IMC= peso /altura 2
IMC= altura 2 peso

Donde el peso está en kilogramos y la altura en metros.
Pide al usuario que ingrese su peso y altura.

Muestra un mensaje indicando si la persona tiene:
Bajo peso (IMC < 18.5)
Peso normal (18.5 ≤ IMC < 25)
Sobrepeso (25 ≤ IMC < 30)
Obesidad (IMC ≥ 30)

altura2 = 1.75 * 1.75 = 3.0625
imc = 68.5 / 3.0625 = 22.36

Y mostrará:
"Hola [nombre], tu IMC es: 22.36" */


let name = prompt("Dinos tu nombre")

let peso = prompt("Dinos tu peso")
peso = parseFloat(peso)

let altura = prompt("Dinos tu altura")
altura = parseFloat(altura)

let altura2 = altura * 2

let imc = peso / altura2

console.log(`Hola ${name}, tu IMC es: ${imc.toFixed(2)}`);

