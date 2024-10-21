import { Personaje } from "./Personaje"

export class Mago extends  Personaje {

    constructor(nombre:string) {
        super(nombre) 
    }

    public ataqueMagico() {
        this.ataque= this.ataque -1
        console.log(`${this.nombre} lanza un ataque simple con su varita magica  ${this.ataque}`)
 
    }
}