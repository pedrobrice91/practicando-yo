/* crea un array de personajes de peliculas y 
clasificalos en grupos (Héroes, villanos, ect)
 muestra un mensaje para cada grupo */

const personajes = ["Iron Man", "Ellen Ripley", "John McClane", "Wonder Woman","Darth Vader", "Joker", "Thanos", "Hans Gruber","Wong", "Argus Filch", "C-3PO", "Happy Hogan"]

//const heroes = [personajes[0], personajes[1], personajes[2], personajes[3]];
//const villanos = [personajes[4], personajes[5], personajes[6], personajes[7]];
//const relleno = [personajes[8], personajes[9], personajes[10], personajes[11]]


console.log("Hola esto son los heróes mas importantes de las peliculas 2025 "+ villanos)

personajes.length


const heroes = personajes.filter(per => per.startsWith("H:"))
console.log(heroes)
console.log("--------------------------------------")

const villanos = personajes.filter(perso => perso.startsWith("V:"))
console.log(villanos)
console.log("--------------------------------------")

const relleno = personajes.filter(per =>per.startsWith("R:"))
console.log(relleno)

heroes.forEach(per => {
  console.log(per.split(":")[1]);
})
