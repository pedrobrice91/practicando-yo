/* Crea un array de ingredientes para una receta absurda 
(Como una pizza con chocolate y piña).
Muestra la receta completa en una frase divertida. 
*/

let ingredientes = ["azucar", "mermelada", "pizza", "Chocolate", "Atun"];

const recetaDeLaNona = function(ingredient){
    return console.log(`${ingredient[2]} crujiente cubierta con ${ingredient[1]} dulce, trozos de ${ingredient[4]} jugoso, ralladura de ${ingredient[3]} y un toque final de ${ingredient[0]} espolvoreada!`)
}

recetaDeLaNona(ingredientes)