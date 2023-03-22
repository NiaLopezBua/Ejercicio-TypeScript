import { Direccion } from "./direccion";
import { Mail } from "./mail";
import { Telefono } from "./telefono";


export class Persona {
    private _nombre: string;
    private _apellidos: string;
    private _edad: number;
    private _dni: string; // tipos de datos alfanuméricos = strings.
    private _cumpleaños: Date; //año, mes, día
    private _colorFavorito: string;
    private _sexo: string;
    private _direcciones: Array<Direccion>;
    private _mails: Array<Mail>;
    private _telefonos: Array<Telefono>;
    private _notas: string;

    constructor(nombre: string, apellidos: string, edad: number, dni: string, cumpleaños: Date, colorFavorito: string, sexo: string, direcciones: Array<Direccion>, mails: Array<Mail>, telefonos: Array<Telefono>, notas: string){
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

    get sexo(){
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

    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    set apellidos(apellidos: string) {
        this._apellidos = apellidos;
    }

    set edad(edad: number) {
        this._edad = edad;
    }

    set dni(dni: string) {
        this._dni = dni;
    }

    set cumpleaños(cumpleaños: Date) {
        this._cumpleaños = cumpleaños;
    }

    set colorFavorito(colorFavorito: string) {
        this._colorFavorito = colorFavorito;
    }

    set sexo(sexo: string) {
        this._sexo = sexo;
    }

    set direcciones(direcciones: Array<Direccion>) {
        this._direcciones = direcciones;
    }

    set maisl(mails: Array<Mail>) {
        this._mails = mails;
    }

    set telefonos(telefonos: Array<Telefono>) {
        this._telefonos = telefonos;
    }

    set notas(notas: string) {
        this._notas = notas;
    }

    añadirNuevaDireccion(direccion:Direccion) {
        this._direcciones.push(direccion)
    }

    añadirNuevoTelefono(telefono:Telefono) {
        this._telefonos.push(telefono)
    }

    añadirNuevoMail(mail:Mail) {
        this._mails.push(mail)
    }

}
