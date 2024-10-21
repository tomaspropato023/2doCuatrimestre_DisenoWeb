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
exports.Guerrero = void 0;
var Personaje_1 = require("./Personaje");
var Guerrero = /** @class */ (function (_super) {
    __extends(Guerrero, _super);
    function Guerrero(nombre, puntosDeVida) {
        return _super.call(this, nombre, puntosDeVida) || this;
    }
    Guerrero.prototype.atacar = function () {
        switch (this.nivel) {
            case 1:
                this.ataque = 20;
                break;
            case 2:
                this.ataque = 30;
                break;
            case 3:
                this.ataque = 40;
                break;
            default:
        }
        console.log("El guerrero ".concat(this.nombre, " ataca por ").concat(this.ataque, " puntos de vida."));
    };
    Guerrero.prototype.defender = function () {
        switch (this.nivel) {
            case 1:
                this.bloqueo = 10;
                break;
            case 2:
                this.bloqueo = 20;
                break;
            case 3:
                this.bloqueo = 30;
                break;
            default:
        }
        console.log("El guerrero ".concat(this.nombre, " obtiene un escudo de ").concat(this.bloqueo, " puntos de vida."));
    };
    return Guerrero;
}(Personaje_1.Personaje));
exports.Guerrero = Guerrero;
