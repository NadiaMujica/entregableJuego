import { Personaje } from "./Personaje"

export class Elfo extends  Personaje {
    protected armaAtaque : string = "Arco y flecha";

    constructor(nombre:string) {
        super(nombre) 
    }

    public atacar():void {
        this.ataque = this.ataque -1
        console.log(`${this.nombre} ataca con ${this.armaAtaque}`)
 
    }

}