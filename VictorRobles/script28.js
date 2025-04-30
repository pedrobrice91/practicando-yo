/* 
Pide 6 numeros por pantalla y metelos en un array 
Muestra el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola 
ordenalo y muestralo
invierte su orden y muestralo
Muestra cuantos elementos tiene el array 
Busca uno de los valores que ha metido el usuario, que nos diga si lo encuentra y su indice 
Refactoriza todo lo posible usando funciones
*/

let num1 = parseInt(prompt("Ingresa el 1 numero del array"))
let num2 = parseInt(prompt("Ingresa el 2 numero del array"))
let num3 = parseInt(prompt("Ingresa el 3 numero del array"))
let num4 = parseInt(prompt("Ingresa el 4 numero del array"))
let num5 = parseInt(prompt("Ingresa el 5 numero del array"))
let num6 = parseInt(prompt("Ingresa el 6 numero del array"))
let valor = parseInt(prompt("Busca uno de los valores"))

let numArray = [];
numArray.unshift(num1, num2, num3, num4, num5, num6)

let validador = numArray.includes(valor)

let indice = numArray.indexOf(valor);

if (validador === true) {
    alert("hola lo enconré su indice es " + indice)
} else {
    alert("No hay vida, no esta")
}

document.write("<H1>" + "Estos son los valores ingresados" + "</H1>")

document.write("<ol>")
let num = numArray.forEach((elem) => {
    console.log(document.write("<li>" + elem + "</li>"))
})
document.write("</ol>")

document.write("<H1>" + numArray + "</H1>")
contar = numArray.length
document.write("<H1>"+"El array desordenado "+numArray.reverse()+"</H1>")
document.write("<H1>El array tiene " + contar + " Elementos</H1>")

console.log(numArray)

jj