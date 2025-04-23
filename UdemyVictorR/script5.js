/* Nuestros usuarios tienen perros.
y quieren saber que edad de perro tienen sus mascotas
un año de humano equivale a siete de perro
pregunta a los usuarios que edad tiene su perro
 y dile la edad canina */

let edad = prompt("Que edad tiene tu perro")

edad = parseInt(edad)
let neweEdad = edad * 7

alert(`tu perro tiene ${neweEdad} años en edad de perro`)