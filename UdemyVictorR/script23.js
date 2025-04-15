// Agrega 2 números enteros aleatorios a la lista arr (no necesitas un loop o bucle) e imprime el array en la consola.
//Puedes usar las funciones Math.random() y Math.floor() para obtener números aleatorios.

let arr = [4,5,734,43,45];

let num1 = Math.floor(Math.random()*50)
let num2 = Math.floor(Math.random()*50)
let num3 = Math.floor(Math.random()*50)
let num4 = Math.floor(Math.random()*50)
let num5 = Math.floor(Math.random()*50)

let arr2 = arr.push(num1, num2, num3, num4, num5)

console.log(arr)


while(arr.length < 15){
    let num = Math.floor(Math.random()*50)
    arr = arr.push(num)
    
}

/* En un restaurante se reciben pedidos de comida a domicilio. 
Vamos a escribir una función procesarPedido que recibe un pedido, 
que es un array de platos. Lo que debemos hacer es:

El primer elemento lo sacamos del array, ya que es el nombre del cliente.
Añadimos al principio del array la cadena de texto "bebida", ya que es una promoción que tenemos.
Después añadimos al final del array el nombre del usuario que sacamos antes.
Recuerda que debes devolver el array modificado:

 */

function procesarPedido(pedidos) {

}

procesarPedido(["pedro", ])