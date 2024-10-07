export class Auto {
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

    public getPatente() {
        return this.patente;
    }
    public getMarca() {
        return this.marca;
    }
    public getModelo() {
        return this.modelo;
    }
    public getAnio() {
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