/* 
Crea un array con 10 números aleatorios de 1 a 100. 
Luego pide al usuario que adivine un número	.

Si aciérta muestra un mensaje de celebración si no, 
muestra el numero correcto.
 */

let num1 = Math.floor(Math.random()*101);
let num2 = Math.floor(Math.random()*101);
let num3 = Math.floor(Math.random()*101);
let num4 = Math.floor(Math.random()*101);
let num5 = Math.floor(Math.random()*101);
let num6 = Math.floor(Math.random()*101);
let num7 = Math.floor(Math.random()*101);
let num8 = Math.floor(Math.random()*101);
let num9 = Math.floor(Math.random()*101);
let num10 = Math.floor(Math.random()*101);


let arreglo = new Array(num1, num2, num3, num4, num5, num6, num7, num8, num9, num10)
console.log(arreglo)
let userAdivina = parseInt(prompt("Adivina el primer numero del array es del 1 al 100"))

  if (userAdivina === arreglo[0]){
    alert("Felicidades, acertaste")
  }else {
    alert(`No no, Es el numero ${arreglo[0]} el correcto. `)
  }

