/* 
Tenemos una coleccion de numeros desde el 1 al 17
y el usuario tiene que adivinar cual es el elegido
haz un programa para que pueda adivinar el numero
 */

let aleatorioPC;
let user;

do{
    user = parseInt(prompt("Adivina el numero que eligio el PC"))
    aleatorioPC = Math.round(Math.random()*17)
    alert("El PC escogio "+ aleatorioPC + " y El usuario dijo "+ user)
}
while(user != aleatorioPC){
    alert("Adivinastes")
}
