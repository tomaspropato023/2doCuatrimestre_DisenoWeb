import { Vehiculo } from "./vehiculos";

export class Moto extends Vehiculo {
    constructor (patente : string, marca : string, modelo : string, anio : number) {
        super(patente, marca, modelo, anio);
    }
}