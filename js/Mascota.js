import Animal from "./Animal.js"
export default class Mascota extends Animal{
    constructor(nombrePropietario, direccion, telefono, tipo, nombreMascota, enfermedad){
        super(nombrePropietario, direccion, telefono, tipo)
        this._nombreMascota = () => nombreMascota
        this._enfermedad = () => enfermedad
    }

    get nombreMascota(){
        return this._nombreMascota()
    }

    set nombreMascota(new_mascota){
        return this._nombreMascota = () => new_mascota
    }

    get enfermedad(){
        return this._enfermedad()
    }

    set enfermedad(new_enfermedad){
        return this._enfermedad= () => new_enfermedad
    }

}