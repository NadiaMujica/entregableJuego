import { Guerrero } from "./Guerrero";
import { Mago } from "./Mago";
import { Elfo } from "./Elfo";
import { Evolucion } from "./MagoEvo";

let aquiles:Guerrero = new Guerrero("Aquiles");
let merlin:Mago = new Mago("Merlin");
let legolas:Elfo = new Elfo("Legolas");
let harry:Evolucion = new Evolucion("Harry Potter")

legolas.atacar()
legolas.getAtaque()

merlin.atacar()
merlin.getAtaque()


aquiles.recibeSuperAtaque()
aquiles.restituyeVida()

aquiles.atacar()
aquiles.getAtaque()
aquiles.recibeSuperAtaque()
aquiles.recibeSuperAtaque()
aquiles.getEstadoVida()
aquiles.recibeSuperAtaque()
aquiles.recibeSuperAtaque()
aquiles.getEstadoVida()
aquiles.recibeSuperAtaque()
aquiles.getEstadoVida()

// mago evoluciona
harry.getEstadoVida()
harry.getAtaque()