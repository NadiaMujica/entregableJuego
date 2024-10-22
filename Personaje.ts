export abstract class Personaje {
    protected  nombre: string;
    protected   vida: number= 100;
    protected ataque: number=10;
    constructor(nombre:string) {
        this.nombre=nombre;

    }

    abstract atacar():void; 

    public getAtaque ():void {
        console.log( `${this.nombre} utilizó sus poderes y ahora le quedan ${this.ataque} oportunidades para seguir atacando `)
    }

    public getEstadoVida ():void {
        if (this.vida > 0) {
            console.log( `${this.nombre} tiene ${this.vida} de vida`)
        }
        else{
            console.log( `${this.nombre} murió`)

        }
    }

    public recibeAtaqueSimple ():void{
        this.vida-= 1;
        console.log(`${this.nombre} recibio un ataque simple, ahora le queda ${this.vida} de vida`);
        
    }

    public recibeSuperAtaque ():void{
        this.vida-= 20;
        console.log(`${this.nombre} recibio un super ataque.`);
        
    }

    public restituyeVida ():void{
        this.vida = 100
        console.log(`${this.nombre} recuperó  su vida ahora tiene ${this.vida}`);
        
    }

    public muerte ():void{
        if (this.vida <= 0){
        console.log(`${this.nombre} sufrió un ataque que le quitó la vida`);
    }
        
    }

}