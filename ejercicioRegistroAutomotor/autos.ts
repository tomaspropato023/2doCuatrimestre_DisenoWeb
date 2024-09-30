export class Auto {
    private marca: string;
    private modelo: string;
    private patente: number;
    private anio: number;

    public constructor(marca: string, modelo: string, patente: number, anio: number) {
        this.marca = marca
        this.modelo = modelo
        this.patente = patente
        this.anio = anio
    }
    public getMarca() {
        return this.marca;
    }
    public getModelo() {
        return this.modelo;
    }
    public getPatente() {
        return this.patente;
    }
    public getAnio() {
        return this.anio;
    }

    public setMarca(valor: string): void {
        this.marca = valor;
    }
    public setModelo(valor: string): void {
        this.modelo = valor;
    }
    public setPatente(valor: number): void {
        this.patente = valor;
    }
    public setAnio(valor: number): void {
        this.anio = valor;
    }
}