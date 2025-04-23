/* Un DJ no sabe que genero musical poner en la fiesta
Preguntale al usuario que genero quiere(pop, rock, rap)
segun lo que prefiera devuelve un mensaje diferente */

let musicaCliente = prompt("Me indicas que genero quieres escuchar")

if (musicaCliente === "pop") {
    alert("Britney Spears - Baby One More Time");
}
else if (musicaCliente === "rock") {
    alert("Metallica - One");
} else if (musicaCliente === "rap") {
    alert("Drake - One dance")
}