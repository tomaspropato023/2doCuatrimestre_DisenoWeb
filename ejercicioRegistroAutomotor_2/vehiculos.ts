export class Vehiculo {
    private marca: string;
    private modelo: string;
    private patente: string;
    private anio: number;

    public constructor(patente: string, modelo: string, marca: string, anio: number) {
        this.patente = patente
        this.modelo = modelo
        this.marca = marca
        this.anio = anio
    }

    public getPatente() : string {
        return this.patente;
    }
    public getMarca() : string {
        return this.marca;
    }
    public getModelo() : string {
        return this.modelo;
    }
    public getAnio() : number {
        return this.anio;
    }

    public setPatente(valor: string): void {
        this.patente = valor;
    }
    public setMarca(valor: string): void {
        this.marca = valor;
    }
    public setModelo(valor: string): void {
        this.modelo = valor;
    }
    public setAnio(valor: number): void {
        this.anio = valor;
    }
}