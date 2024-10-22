import { Personaje } from "./Personaje"

export class Mago extends  Personaje {
    protected armaAtaque : string = "Varita magica";

    constructor(nombre:string) {
        super(nombre) 
    }

    public atacar(): void {
        this.ataque = this.ataque -1
        console.log(`${this.nombre} ataca con ${this.armaAtaque}`)
 
    }
}