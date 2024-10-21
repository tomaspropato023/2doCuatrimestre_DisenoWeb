"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arquero = void 0;
var Personaje_1 = require("./Personaje");
var Arquero = /** @class */ (function (_super) {
    __extends(Arquero, _super);
    function Arquero(nombre, puntosDeVida) {
        return _super.call(this, nombre, puntosDeVida) || this;
    }
    Arquero.prototype.atacar = function () {
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
        console.log("El arquero ".concat(this.nombre, " ataca por ").concat(this.ataque, " puntos de vida."));
    };
    Arquero.prototype.defender = function () {
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
        console.log("El arquero ".concat(this.nombre, " obtiene un escudo de ").concat(this.bloqueo, " puntos de vida."));
    };
    return Arquero;
}(Personaje_1.Personaje));
exports.Arquero = Arquero;
