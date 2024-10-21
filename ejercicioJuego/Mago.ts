import { Personaje } from "./Personaje";

export class Mago extends Personaje {
    private ataque : number;
    private bloqueo : number;
    constructor (nombre : string, puntosDeVida : number) {
        super(nombre, puntosDeVida);
    }

    atacar(): void {
        switch(this.nivel) {
            case 1:
                this.ataque = 10;
                break;
            case 2:
                this.ataque = 20;
                break;
            case 3:
                this.ataque = 30;
                break;
        }
        console.log(`El mago ${this.nombre} está atacando por ${this.ataque} puntos de vida.`);
    }

    defender(): void {
        switch(this.nivel) {
            case 1:
                this.bloqueo = 5;
                break;
            case 2:
                this.bloqueo = 15;
                break;
            case 3:
                this.bloqueo = 25;
                break;
            default:
        }
        console.log(`El mago ${this.nombre} lanza un escudo de ${this.bloqueo} puntos de vida.`);
    }
}