/* Tienes un canguro que al saltar avanza 3 metros. 
Vamos a hacer un programa que simule todos los 
saltos del canguro y te indique dos cosas:
El número de salto que ha dado.
La distancia total recorrida después de cada salto.
El programa debe continuar imprimiendo estos datos 
hasta que el canguro haya dado 17 saltos, y 
luego debe finalizar. */

let avanzaCanguro = 3;

for (let canguro = 1; canguro <= 17; canguro++){
    console.log(`Hola, el canguro a saltado ${canguro} ves y avanzo ${avanzaCanguro} metros`)
    avanzaCanguro = avanzaCanguro+3
}