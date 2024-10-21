import { Personaje } from "./Personaje";

export class Guerrero extends Personaje {
    private ataque : number;
    private bloqueo : number;

    constructor (nombre : string, puntosDeVida : number) {
        super(nombre, puntosDeVida);
    }

    atacar(): void {
        switch (this.nivel) {
            case 1:
                this.ataque = 20;
                break;
            case 2:
                this.ataque = 30;
                break;
            case 3:
                this.ataque = 40;
                break;
            default:
        }
        console.log(`El guerrero ${this.nombre} ataca por ${this.ataque} puntos de vida.`);
    }

    defender(): void {
        switch (this.nivel) {
            case 1:
                this.bloqueo = 10;
                break;
            case 2:
                this.bloqueo = 20;
                break;
            case 3:
                this.bloqueo = 30;
                break;
            default:
        }
        console.log(`El guerrero ${this.nombre} obtiene un escudo de ${this.bloqueo} puntos de vida.`);
    }
}