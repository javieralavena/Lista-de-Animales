(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Propietario2 = _interopRequireDefault(require("./Propietario.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Animal = /*#__PURE__*/function (_Propietario) {
  _inherits(Animal, _Propietario);

  var _super = _createSuper(Animal);

  function Animal(nombrePropietario, direccion, telefono, tipo) {
    var _this;

    _classCallCheck(this, Animal);

    _this = _super.call(this, nombrePropietario, direccion, telefono);

    _this._tipo = function () {
      return tipo;
    };

    return _this;
  }

  _createClass(Animal, [{
    key: "tipo",
    get: function get() {
      return "El tipo de animal es un: ".concat(this._tipo());
    }
  }]);

  return Animal;
}(_Propietario2["default"]);

exports["default"] = Animal;
},{"./Propietario.js":3}],2:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Animal2 = _interopRequireDefault(require("./Animal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Mascota = /*#__PURE__*/function (_Animal) {
  _inherits(Mascota, _Animal);

  var _super = _createSuper(Mascota);

  function Mascota(nombrePropietario, direccion, telefono, tipo, nombreMascota, enfermedad) {
    var _this;

    _classCallCheck(this, Mascota);

    _this = _super.call(this, nombrePropietario, direccion, telefono, tipo);

    _this._nombreMascota = function () {
      return nombreMascota;
    };

    _this._enfermedad = function () {
      return enfermedad;
    };

    return _this;
  }

  _createClass(Mascota, [{
    key: "nombreMascota",
    get: function get() {
      return this._nombreMascota();
    },
    set: function set(new_mascota) {
      return this._nombreMascota = function () {
        return new_mascota;
      };
    }
  }, {
    key: "enfermedad",
    get: function get() {
      return this._enfermedad();
    },
    set: function set(new_enfermedad) {
      return this._enfermedad = function () {
        return new_enfermedad;
      };
    }
  }]);

  return Mascota;
}(_Animal2["default"]);

exports["default"] = Mascota;
},{"./Animal.js":1}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
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
},{"./Animal.js":1,"./Mascota.js":2,"./Propietario.js":3}]},{},[4]);
