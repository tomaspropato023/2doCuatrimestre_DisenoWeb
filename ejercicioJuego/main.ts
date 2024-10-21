import { Mago } from "./Mago";
import { Guerrero } from "./Guerrero";
import { Arquero } from "./Arquero";

let mago1 = new Mago('Gandalf', 100);
let guerrero1 = new Guerrero ('Arthas', 250);
let arquero1 = new Arquero ('Legolas', 150);

console.log('--------------------------------------------------------');
mago1.atacar();
mago1.aumentarVida(50);
mago1.subirDeNivel();
mago1.defender()
mago1.subirDeNivel();
mago1.atacar();
mago1.reducirVida(25);
mago1.bajarDeNivel();
console.log('--------------------------------------------------------');
guerrero1.atacar();
guerrero1.aumentarVida(150);
guerrero1.subirDeNivel();
guerrero1.defender()
guerrero1.subirDeNivel();
guerrero1.atacar();
guerrero1.reducirVida(75);
guerrero1.bajarDeNivel();
console.log('--------------------------------------------------------');
arquero1.atacar();
arquero1.aumentarVida(50);
arquero1.subirDeNivel();
arquero1.defender()
arquero1.subirDeNivel();
arquero1.atacar();
arquero1.reducirVida(50);
arquero1.bajarDeNivel();
console.log('--------------------------------------------------------');