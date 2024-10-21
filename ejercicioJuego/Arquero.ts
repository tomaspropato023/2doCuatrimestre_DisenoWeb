import { Personaje } from "./Personaje";

export class Arquero extends Personaje {
    private ataque : number;
    private bloqueo : number;

    constructor (nombre : string, puntosDeVida : number) {
        super(nombre, puntosDeVida);
    }

    atacar(): void {
        switch (this.nivel) {
            case 1:
                this.ataque = 25;
                break;
            case 2:
                this.ataque = 40;
                break;
            case 3:
                this.ataque = 50;
                break;
            default:
        }
        console.log(`El arquero ${this.nombre} ataca por ${this.ataque} puntos de vida.`);
    }

    defender(): void {
        switch (this.nivel) {
            case 1:
                this.bloqueo = 0;
                break;
            case 2:
                this.bloqueo = 5;
                break;
            case 3:
                this.bloqueo = 10;
                break;
            default:
        }
        console.log(`El arquero ${this.nombre} obtiene un escudo de ${this.bloqueo} puntos de vida.`);
    }
}