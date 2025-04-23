//dime si es par o impar 


let numero = 0;
while(!isNaN(numero)){

    numero = parseInt(prompt("ingresa tu numero"))

    console.log(isNaN(numero))
if ((numero % 2) === 0){
        console.log("Es par")
}else{
    console.log("Es impar")}
}