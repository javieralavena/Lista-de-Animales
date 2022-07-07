"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Propietario = /*#__PURE__*/function () {
  function Propietario(nombrePropietario, direccion, telefono) {
    _classCallCheck(this, Propietario);

    this._nombrePropietario = function () {
      return nombrePropietario;
    };

    this._direccion = function () {
      return direccion;
    };

    this._telefono = function () {
      return telefono;
    };
  }

  _createClass(Propietario, [{
    key: "datosPropietario",
    value: function datosPropietario() {
      return "El nombre del due\xF1o es: ".concat(this._nombrePropietario(), ". El domicilio es: ").concat(this._direccion(), ", y el n\xFAmero telef\xF3nico de contacto: ").concat(this._telefono());
    }
  }]);

  return Propietario;
}();

exports["default"] = Propietario;