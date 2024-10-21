"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
var Personaje = /** @class */ (function () {
    function Personaje(nombre, puntosDeVida) {
        this.nivel = 1;
        this.nombre = nombre;
        this.puntosVida = puntosDeVida;
    }
    Personaje.prototype.aumentarVida = function (cantidad) {
        this.puntosVida = this.puntosVida + cantidad;
    };
    Personaje.prototype.reducirVida = function (cantidad) {
        this.puntosVida = this.puntosVida - cantidad;
    };
    Personaje.prototype.getVida = function () {
        return this.puntosVida;
    };
    Personaje.prototype.subirDeNivel = function () {
        this.nivel += 1;
        console.log("\u00A1El personaje ".concat(this.nombre, " ha subido de nivel!"));
    };
    Personaje.prototype.bajarDeNivel = function () {
        this.nivel -= 1;
        console.log("".concat(this.nombre, " ha bajado de nivel."));
    };
    Personaje.prototype.getNivel = function () {
        return this.nivel;
    };
    return Personaje;
}());
exports.Personaje = Personaje;
