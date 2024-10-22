import { Personaje } from "./Personaje";

export class Evolucion extends Personaje{
    protected vida = 200;
    protected ataque = 20;
    protected armaAtaque : string = "Super varita 2.0";

    constructor(nombre:string) {
        super(nombre)
    }

    public atacar():void {
        this.ataque = this.ataque -1
        console.log(`${this.nombre} ataca con ${this.armaAtaque}`)
 
    }

    public evolucionar(){
        this.vida = this.vida
        this.ataque =this.ataque
    }


}
