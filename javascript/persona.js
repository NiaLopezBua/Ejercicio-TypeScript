"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, apellidos, edad, dni, cumpleaños, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleaños = cumpleaños;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefonos;
        this._notas = notas;
    }
    get nombre() {
        return this._nombre;
    }
    get apellidos() {
        return this._apellidos;
    }
    get edad() {
        return this._edad;
    }
    get dni() {
        return this._dni;
    }
    get cumpleaños() {
        return this._cumpleaños;
    }
    get colorFavorito() {
        return this._colorFavorito;
    }
    get sexo() {
        return this._sexo;
    }
    get direcciones() {
        return this._direcciones;
    }
    get mails() {
        return this._mails;
    }
    get telefonos() {
        return this._telefonos;
    }
    get notas() {
        return this._notas;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    set apellidos(apellidos) {
        this._apellidos = apellidos;
    }
    set edad(edad) {
        this._edad = edad;
    }
    set dni(dni) {
        this._dni = dni;
    }
    set cumpleaños(cumpleaños) {
        this._cumpleaños = cumpleaños;
    }
    set colorFavorito(colorFavorito) {
        this._colorFavorito = colorFavorito;
    }
    set sexo(sexo) {
        this._sexo = sexo;
    }
    set direcciones(direcciones) {
        this._direcciones = direcciones;
    }
    set maisl(mails) {
        this._mails = mails;
    }
    set telefonos(telefonos) {
        this._telefonos = telefonos;
    }
    set notas(notas) {
        this._notas = notas;
    }
    añadirNuevaDireccion(direccion) {
        this._direcciones.push(direccion);
    }
    añadirNuevoTelefono(telefono) {
        this._telefonos.push(telefono);
    }
    añadirNuevoMail(mail) {
        this._mails.push(mail);
    }
}
exports.Persona = Persona;
