"use strict";

var _Propietario = _interopRequireDefault(require("./Propietario.js"));

var _Animal = _interopRequireDefault(require("./Animal.js"));

var _Mascota = _interopRequireDefault(require("./Mascota.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var formulario = document.querySelector('form');
formulario.addEventListener('submit', function (event) {
  event.preventDefault();
  var nombrePropietario = document.getElementById('propietario').value;
  var direccion = document.getElementById('direccion').value;
  var telefono = document.getElementById('telefono').value;
  var tipo = document.getElementById('tipo').value;
  var nombreMascota = document.getElementById('nombreMascota').value;
  var enfermedad = document.getElementById('enfermedad').value;
  var mascota = new _Mascota["default"](nombrePropietario, direccion, telefono, tipo, nombreMascota, enfermedad);
  console.log(mascota);
  var listas = document.getElementById('resultado');
  var li1 = document.createElement('li');
  li1.innerHTML = mascota.datosPropietario();
  var li2 = document.createElement('li');
  li2.innerHTML = "".concat(mascota.tipo, ", mientras que el nombre de la mascota es: ").concat(mascota.nombreMascota, " y la enfermedad es ").concat(mascota.enfermedad);
  listas.appendChild(li1);
  listas.appendChild(li2);
});