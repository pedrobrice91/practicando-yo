/* Ejer 1
Calcula cuantas horas le llevaria llegar a la luna a una nave espacial y 
guarda el resultado en una variable
La distancia desde la tierra hasta la luna es de 384.400 km
La velocidad de la nave es de 1225 km por hora 

fórmula básica de tiempo = distancia / velocidad. */

let distancia = 384400;
let velocidad = 1225;
let tiempoHoras = distancia / velocidad;

let redondear = tiempoHoras.toFixed(2)// quitarle el 0.

let horas = Math.floor(redondear) // saco las horas

let minutos = Math.round((tiempoHoras - horas) * 60)

alert("Si vas de la tierra a la luna, te demorarias " + horas + " horas " + " y " + minutos + " minutos ")