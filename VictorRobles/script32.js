const user = {
    name: 'juan',
    apellido: 'torres',
    edad: 30
}

const usuarios = {
    name: 'antonio',
    apellido: 'Martinez',
    edad: 35
}

const { name, apellido } = user
const { name: Nombreusuarios, apellido: apellidousuario } = usuarios


console.log(`${name} ${apellido}`)
console.log(`${Nombreusuarios} ${apellidousuario}`)

const nuevoObj = {
    name: 'pedro',
    ...usuarios,
    anio: '33'
}
alert('hola')

console.log(nuevoObj)


const variable = "https://rickandmortyapi.com/api/character/1"
const variables = "https://jsonplaceholder.typicode.com/comments"
const vv = 'https://reqres.in/api/users/2'

const personaje = [];


//forma UNO
fetch(variable, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then((response) => {
        console.log(response)
        return response.json()
    })
    .then(datos => {
        console.log('hola', datos)

    })
    .catch((error) => {
        console.warn('Calmao estamos con error' + error)
    })


//forma DOS
const conAsing = async () => {
    try {
        const pegarle = await fetch(variables)
        const datao = await pegarle.json()
        mostrarUser(datao)
        console.log(datao)
    } catch (error) {
        console.log(error)
    }
}

const mostrarUser = (usuario) => {
    const vartolomeo = document.querySelector('#user')
    vartolomeo.innerHTML = `<H1>${usuario[0].email}</H1>`
}
conAsing()