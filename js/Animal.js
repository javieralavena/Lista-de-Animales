import Propietario from "./Propietario.js"

export default class Animal extends Propietario{
    constructor(nombrePropietario, direccion, telefono, tipo){
        super(nombrePropietario, direccion, telefono)
        this._tipo = () => tipo
    }
    
    get tipo(){
        return `El tipo de animal es un: ${this._tipo()}`
    }
}