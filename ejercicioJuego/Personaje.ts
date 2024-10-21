export abstract class Personaje {
    protected nombre : string;
    protected nivel : number = 1;
    protected puntosVida : number;

    constructor (nombre : string, puntosDeVida : number) {
        this.nombre = nombre;
        this.puntosVida = puntosDeVida;
    }

    abstract atacar() : void;
    abstract defender() : void;

    public aumentarVida (cantidad : number) : void {
        this.puntosVida = this.puntosVida + cantidad;
    }

    public reducirVida (cantidad : number) : void {
        this.puntosVida = this.puntosVida - cantidad;
    }

    public getVida() : number {
        return this.puntosVida;
    }

    public subirDeNivel() : void {
        this.nivel += 1;
        console.log(`¡El personaje ${this.nombre} ha subido de nivel!`);
    }

    public bajarDeNivel() : void {
        this.nivel -= 1;
        console.log(`${this.nombre} ha bajado de nivel.`);
    }

    public getNivel() : number {
        return this.nivel;
    }
}