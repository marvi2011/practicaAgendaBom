import Contacto from "./classContactos.js";

//declaro las variables
const modalContacto = new bootstrap.Modal( //con esto hago que la ventana modal se abra desde javascript, debo quitar los data del html
  document.getElementById("modalAdmContacto") //este es el id de la ventana modal
);
console.log(modalContacto);
//modalContacto.show(); para saber si la linea de codigo anterior funciona bien pero la abre cuando se abre la pagina y necesitamos que lo haga cuando apretamos un boton, lo vamos a corregir

const btnNuevo = document.getElementById("btnNuevo");
const formContacto = document.getElementById("formContacto");
//ahora traigo los input del formulario
const apellido = document.getElementById("apellido");
const nombre = document.getElementById("nombre");
const mail = document.getElementById("mail");
const telefono = document.getElementById("telefono");
const github = document.getElementById("github"), // se puede usar este método tambien para declarar las constantes
  domicilio = document.getElementById("domicilio"),
  foto = document.getElementById("foto");

//verificar si hay datos en el localstorage, si hay los traigo y sino que sea un array vacio
const listaContactos =
  JSON.parse(localStorage.getItem("listaContactokey")) || [];

//ahora van las funciones
const mostrarModal = () => {
  modalContacto.show();
};

const crearContacto = (e) => {
  e.preventDefault();
  console.log("desde la funcion crearContacto");
  // debo validad los datos del formulario
  //debo crear los objetos
  const nuevoContacto = new Contacto(
    apellido.value,
    nombre.value,
    mail.value,
    telefono.value,
    github.value,
    domicilio.value,
    foto.value
  );
  console.log(nuevoContacto);
  //debo guardarlos en un array o lista de contactos
  listaContactos.push(nuevoContacto);
  console.log(listaContactos);
  limpiarform();
  //guardar el array en un localstorage
  guardarEnLocalStorage();
};
const limpiarform = () => { //se limpia el formulario despues de llenar los campos y darle enviar
  formContacto.reset();
};
const guardarEnLocalStorage = () => {
  localStorage.setItem("listaContactosKey", JSON.stringify(listaContactos));
};
//aqui agrego la logica del CRUD
//aqui agrego el resto de la logica
btnNuevo.addEventListener("click", mostrarModal);
formContacto.addEventListener("submit", crearContacto);

console.log("Prueba desde admin");
const contacto = new Contacto(
  "Martinez",
  "Camila",
  "camila@hotmail.com",
  381222555,
  "-",
  "La Plata 25"
);
console.log(contacto);

//console.log(modalContacto);
//modalContacto.show();

const cargaInicial = () => {
  //preguntar si hay datos en el array de contacto
  if (listaContactos.length > 0) {
    ///dibujar una fila en la tabla
    listaContactos.map((contacto) => dibujarFila());
  }
};
const dibujarFila = () => {
  const tabla = document.querySelector("tbody");
  tabla.innerHTML +=
    '<tr><td>1</td><td>Martinez</td><td>Camila</td><td>camila@hotmail.com</td><td><button class="btn btn-success">Ver</button><button class="btn btn-warning">Editar</button><button class="btn btn-danger">Borrar</button></td></tr>';
};

cargaInicial();
