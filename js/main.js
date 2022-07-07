import Propietario from "./Propietario.js";
import Animal from "./Animal.js";
import Mascota from "./Mascota.js";


const formulario = document.querySelector('form')

formulario.addEventListener('submit',(event)=>{
    event.preventDefault()
    let nombrePropietario = document.getElementById('propietario').value
    let direccion =  document.getElementById('direccion').value
    let telefono =  document.getElementById('telefono').value
    let tipo = document.getElementById('tipo').value
    let nombreMascota = document.getElementById('nombreMascota').value
    let enfermedad = document.getElementById('enfermedad').value

    let mascota = new Mascota(nombrePropietario,direccion,telefono,tipo,nombreMascota,enfermedad)

    console.log(mascota)

    let listas = document.getElementById('resultado')
    let li1 = document.createElement('li')
    li1.innerHTML = mascota.datosPropietario()
    let li2 = document.createElement('li') 
    li2.innerHTML = `${mascota.tipo}, mientras que el nombre de la mascota es: ${mascota.nombreMascota} y la enfermedad es ${mascota.enfermedad}`
    listas.appendChild(li1)
    listas.appendChild(li2)
})



