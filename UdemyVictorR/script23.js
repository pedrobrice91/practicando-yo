/* Dada una lista de números, 
escribe una función en JavaScript que devuelva la suma de todos 
los números pares en la lista. La función deberá iterar sobre 
cada número en la lista, comprobar si el número es par y, 
si es así, añadirlo a la suma total. Usa el bucle que quieras 
para solucionarlo.

 */

let numbers = [1,2,3,4,5];

const SumPares = (num)=> {
let suma = 0;
num.forEach(function(element){
if (element % 2 === 0){
suma += element
}
} )
  return `la sumatoria de los numeros pares es ${suma}`
}
document.write("<h1>Soy el titulo </h1>")
console.log(SumPares(numbers))
document.write("<h1>"+SumPares(numbers)+"</h1>")
                    