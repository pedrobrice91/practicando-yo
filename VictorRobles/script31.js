function restame(num1, num2, mostrar, multiPorTres) {
    let resta = num1 - num2

    mostrar(resta)
    multiPorTres(resta)

    return resta

}

restame(20, 5,(resultado)=>{
    console.log(resultado)
}, 
(resultado)=>{
    console.log(resultado * 3)
});