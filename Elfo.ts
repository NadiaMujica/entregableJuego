import { Personaje } from "./Personaje"

export class Elfo extends  Personaje {
    constructor(nombre:string) {
        super(nombre) 
    }

    public ataqueConFlecha() {
        this.ataque= this.ataque -1
        console.log(`${this.nombre} ataca con su arco y flecha`)
 
    }

}