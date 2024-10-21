import { Guerrero } from "./Guerrero";
import { Mago } from "./Mago";
import { Elfo } from "./Elfo";
import { Evolucion } from "./MagoEvo";

let aquiles:Guerrero = new Guerrero("Aquiles");
let merlin:Mago = new Mago("Merlin");
let legolas:Elfo = new Elfo("Legolas");
let harry:Evolucion = new Evolucion("Harry Potter")

legolas.ataqueConFlecha()
legolas.getAtaque()

merlin.ataqueMagico()
merlin.getAtaque()


aquiles.getVida()
aquiles.recibeSuperAtaque()
aquiles.restituyeVida()

aquiles.ataqueConEspada()
aquiles.getAtaque()
aquiles.recibeSuperAtaque()
aquiles.recibeSuperAtaque()
aquiles.recibeSuperAtaque()
aquiles.recibeSuperAtaque()
aquiles.recibeSuperAtaque()
aquiles.muerte()
merlin.getVida


harry.getVida()
harry.getAtaque()