//Tenemos una función que recibe dos parámetros.// name y subs. Haz que la función devuelva un objeto con la siguiente información:

//name con el valor del parámetro name
//subscribers con el valor del parámetro subs
//hash, con el valor de la longitud del string name multiplicado por el parámetro subs
//Un método getStatus que devuelva el texto El canal de <name> tiene <subs> suscriptores. Por ejemplo, para //name = 'Dani' y subs = 100, el método getStatus devolvería El canal de Dani tiene 100 suscriptores.
//¡Ojo! El método getStatus debe devolver el texto, NO imprimirlo por consola.

function createObject(name, subscribers) {
  
    return {name:name, subscribers:subscribers, hash:name.length * subscribers, getStatus:function(){
      return`El canal de ${name} tiene ${subscribers} suscriptores.`
    }} 
  }
  
  
  let mensaje = createObject("Dani", 100)
  mensaje.getStatus()