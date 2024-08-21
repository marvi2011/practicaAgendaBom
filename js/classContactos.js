export default class Contacto {
  #id;
  #apellido;
  #nombre;
  #mail;
  #telefono;
  #github;
  #domicilio;
  #foto;
  constructor(apellido, nombre, mail, telefono, github, domicilio, foto) {
    this.#id = crypto.randomUUID(); //para encontrar un id
    this.#apellido = apellido;
    this.#nombre = nombre;
    this.#mail = mail;
    this.#telefono = telefono;
    this.#github = github;
    this.#domicilio = domicilio;
    this.#foto = foto;
  }
  //agregar set y get
  get id() {
    return this.#id;
  }
  set id(value) {
    this.#id = value;
  }
  get apellido() {
    return this.#apellido;
  }
  set apellido(value) {
    this.#apellido = value;
  }
  get nombre() {
    return this.#nombre;
  }
  set nombre(value) {
    this.#nombre = value;
  }
  get mail() {
    return this.#mail;
  }
  set mail(value) {
    this.#mail = value;
  }
  get telefono() {
    return this.#telefono;
  }
  set telefono(value) {
    this.#telefono = value;
  }
  get github() {
    return this.#github;
  }
  set github(value) {
    this.#github = value;
  }
  get domicilio() {
    return this.#domicilio;
  }
  set domicilio(value) {
    this.#domicilio = value;
  }
  get foto() {
    return this.#foto;
  }
  set foto(value) {
    this.#foto = value;
  }

  //agregar los metodos para que funciones JSON.stringify.js
  //el metodo JSON se usa cuando se tienen propiedades privadas, si no son privadas no hace falta hacerlo
  toJSON() {
    return {
      id: this.id,
      apellido: this.apellido,
      nombre: this.nombre,
      mail: this.mail,
      telefono: this.telefono,
      github: this.github,
      domicilio: this.domicilio,
      foto: this.foto,
    };
  }
}
