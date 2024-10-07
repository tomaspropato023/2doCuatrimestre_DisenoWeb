import { Auto } from "./autos"
import { Camion } from "./camiones"
import { Moto } from "./motos"

export class RegistroAutomotor {
    private autos: Auto [] = []
    private camiones: Camion [] = []
    private motos: Moto [] = []

    public constructor (autos: Auto [] = [], camiones: Camion [] = [], motos: Moto [] = []) {
        this.autos = autos;
        this.camiones = camiones;
        this.motos = motos;
    }


    public asignarAuto (patente: string, marca: string, modelo: string, anio: number) {
        if (patente.length < 6) {
            console.log("La patente del auto debe tener 6 caracteres.");
            return;
        }
        if (marca === "") {
            console.log("La marca del auto no puede estar vacía.");
            return;
        }
        if (modelo === "") {
            console.log("El modelo del auto no puede estar vacío.");
            return;
        }
        if (anio <= 0) {
            console.log("El año de fabricación del auto debe ser un número positivo.");
            return;
        }
        let _auto : Auto = new Auto(patente, marca, modelo, anio);
        this.autos.push(_auto);
    }

    public asignarCamion (patente: string, marca: string, modelo: string, anio: number) {
        if (patente.length < 6) {
            console.log("La patente del camión debe tener 6 caracteres.");
            return;
        }
        if (marca === "") {
            console.log("La marca del camión no puede estar vacía.");
            return;
        }
        if (modelo === "") {
            console.log("El modelo del camión no puede estar vacío.");
            return;
        }
        if (anio <= 0) {
            console.log("El año de fabricación del camión debe ser un número positivo.");
            return;
        }
        let _camion : Camion = new Camion(patente, marca, modelo, anio);
        this.camiones.push(_camion);
    }

    public asignarMoto (patente: string, marca: string, modelo: string, anio: number) {
        if (patente.length < 6) {
            console.log("La patente de la moto debe tener 6 caracteres.");
            return;
        }
        if (marca === "") {
            console.log("La marca de la moto no puede estar vacía.");
            return;
        }
        if (modelo === "") {
            console.log("El modelo de la moto no puede estar vacío.");
            return;
        }
        if (anio <= 0) {
            console.log("El año de fabricación de la moto debe ser un número positivo.");
            return;
        }
        let _moto : Moto = new Moto(patente, marca, modelo, anio);
        this.motos.push(_moto);
    }

    public buscarAuto(patente: string): Auto | undefined {
        if (patente === undefined || patente.length < 6) {
            console.log("Patente inválida. Debe tener 6 caracteres.");
        }
        return this.autos.find((auto) => auto.getPatente() === patente);
    }
    public buscarCamion(patente: string): Camion | undefined {
        if (patente === undefined || patente.length < 6) {
            console.log("Patente inválida. Debe tener 6 caracteres.");
        }
        return this.camiones.find((camion) => camion.getPatente() === patente);
    }

    public buscarMoto(patente: string): Moto | undefined {
        if (patente === undefined || patente.length < 6) {
            console.log("Patente inválida. Debe tener 6 caracteres.");
        }
        return this.motos.find((moto) => moto.getPatente() === patente);
    }

    public darAutoDeBaja(patente: string) {
        if (patente === undefined || patente.length < 6) {
            console.log("Patente inválida. Debe tener 6 caracteres.");
        }
        this.autos = this.autos.filter((auto) => auto.getPatente() !== patente);
    }

    public darCamionDeBaja(patente: string) {
        if (patente === undefined || patente.length < 6) {
            console.log("Patente inválida. Debe tener 6 caracteres.");
        }
        this.camiones = this.camiones.filter((camion) => camion.getPatente() !== patente)
    }

    public darMotoDeBaja(patente: string) {
        if (patente === undefined || patente.length < 6) {
            console.log("Patente inválida. Debe tener 6 caracteres.");
        }
        this.motos = this.motos.filter((moto) => moto.getPatente() !== patente)
    }
    

    public modificarAuto(patente: string, marcaNueva: string, modeloNuevo: string, anioNuevo: number) {
        if (patente.length < 6) {
            console.log("La patente debe tener 6 caracteres.")
            return;
        }
        if (marcaNueva === undefined || marcaNueva === "") {
            console.log("Debe ingresar una marca válida.");
            return;
        }
        if (modeloNuevo === undefined || modeloNuevo === "") {
            console.log("Debe ingresar un modelo válido.");
            return;
        }
        if (anioNuevo === undefined || anioNuevo <= 0) {
            console.log("Debe ingresar un año de fabricación mayor a 0.");
            return;
        }
        let _auto = this.buscarAuto(patente)
        if (_auto) {
            _auto.setMarca(marcaNueva); _auto.setModelo(modeloNuevo); _auto.setAnio(anioNuevo);
        }
    }

    public modificarCamion(patente: string, marcaNueva: string, modeloNuevo: string, anioNuevo: number) {
        if (patente.length < 6) {
            console.log("La patente debe tener 6 caracteres.")
            return;
        }
        if (marcaNueva === undefined || marcaNueva === "") {
            console.log("Debe ingresar una marca válida.");
            return;
        }
        if (modeloNuevo === undefined || modeloNuevo === "") {
            console.log("Debe ingresar un modelo válido.");
            return;
        }
        if (anioNuevo === undefined || anioNuevo <= 0) {
            console.log("Debe ingresar un año de fabricación mayor a 0.");
            return;
        }
        let _camion = this.buscarCamion(patente)
        if (_camion) {
            _camion.setMarca(marcaNueva); _camion.setModelo(modeloNuevo); _camion.setAnio(anioNuevo);
        }
    }

    public modificarMoto(patente: string, marcaNueva: string, modeloNuevo: string, anioNuevo: number) {
        if (patente.length < 6) {
            console.log("La patente debe tener 6 caracteres.")
            return;
        }
        if (marcaNueva === undefined || marcaNueva === "") {
            console.log("Debe ingresar una marca válida.");
            return;
        }
        if (modeloNuevo === undefined || modeloNuevo === "") {
            console.log("Debe ingresar un modelo válido.");
            return;
        }
        if (anioNuevo === undefined || anioNuevo <= 0) {
            console.log("Debe ingresar un año de fabricación mayor a 0.");
            return;
        }
        let _moto = this.buscarMoto(patente)
        if (_moto) {
            _moto.setMarca(marcaNueva); _moto.setModelo(modeloNuevo); _moto.setAnio(anioNuevo);
        }
    }
}