import { Personaje } from "./Personaje";

export class Guerrero extends  Personaje {
    protected armaAtaque : string = "Espada";

    constructor(nombre:string,) {
        super(nombre) 
    }

    public atacar(): void {
        this.ataque = this.ataque -1
        console.log(`${this.nombre} ataca con ${this.armaAtaque}`)
 
    }
}