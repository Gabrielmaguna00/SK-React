
let buttonSubmit = document.getElementById('btn')
const name = document.getElementById("name");
const email = document.getElementById("mail");
const msg = document.getElementById("msg");
buttonSubmit.addEventListener('click', (event) =>{
    event.preventDefault()
    console.log("Nombre del usuario: ",name.value)
    console.log("email del usuario: ",email.value)
    console.log("Mensaje del usuario: ",msg.value)
    name.value=''
    email.value=''
    msg.value=''})
// const showForm = ()=>{

//     return console.log(hola)
// }