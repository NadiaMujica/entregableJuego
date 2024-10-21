import { Personaje } from "./Personaje";

export class Guerrero extends  Personaje {

    constructor(nombre:string,) {
        super(nombre) 
    }

    public ataqueConEspada() {
        this.ataque= this.ataque -1
        console.log(`${this.nombre} ataca con su espada`)
 
    }
}