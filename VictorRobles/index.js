// Your code here

//añadir tarea add task 
// selecciono el UL
const ul = document.querySelector('ul');
ul.classList.add('my_ul');
const dv = document.querySelector('#container');

const add = document.querySelector('#addToDo')
add.addEventListener('change', (e)=>{
    
    //creo las etiquetas
    const li = document.createElement('li');
    li.innerText = e.target.value;
    ul.appendChild(li);
    
    const span = document.createElement('span');
    li.appendChild(span)
    li.prepend(span);
    
    const cursiva = document.createElement('i');
    cursiva.classList.add('fa', 'fa-trash');
    span.appendChild(cursiva)

})

const list = document.querySelector(".my_ul");
list.addEventListener("click", function(e) {
  if (e.target.matches(".fa-trash")) {
    e.target.parentElement.parentElement.remove();
  }
});
