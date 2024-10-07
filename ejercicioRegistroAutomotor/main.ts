import { RegistroAutomotor } from "./registroDelAutomotor";

const registro: RegistroAutomotor = new RegistroAutomotor ();

registro.asignarAuto("ATC 416", "Volkswagen", "Golf", 2015);
registro.asignarAuto("VAS 609", "Ford", "Ka", 2007)
registro.asignarCamion("CCA 271", "Iveco", "Cursor", 2013);
registro.asignarCamion("BAY 861", "Mercedes-Benz", "1634", 2005)
registro.asignarMoto("BCF 199", "Honda", "NX400", 2019);
registro.asignarMoto("NNA 782", "Kawasaki", "Ninja 636", 2021)

let autoABuscar = registro.buscarAuto("ATC 416");
if (autoABuscar) {
    console.log(`Se encontró el auto: ${autoABuscar}`);
}  else {
    console.log("No se pudo encontrar el auto.");
}

let camionABuscar = registro.buscarCamion("BAY 861")
if (camionABuscar) {
    console.log(`Se encontró el auto: ${camionABuscar}`);
} else {
    console.log("No se pudo encontrar el camión.");
}

let motoABuscar = registro.buscarMoto("BCF 199")
if (motoABuscar) {
    console.log(`Se encontró la moto: ${motoABuscar}`);
} else {
    console.log("No se pudo encontrar la moto.");
}