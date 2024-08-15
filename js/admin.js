import { Contacto } from "./classContactos.js";

// aqui voy a agregar toda la logica del CRUD

//declaro las variables
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
const modalContacto = new bootstrap.Modal(
  document.getElementById("modalAdmContacto")
);
const btnNuevo = document.getElementById("btnNuevo");
const formContacto = document.getElementById("formContacto");
//console.log(modalContacto);
//modalContacto.show();

//ahora traigo los input del formulario
const apellido = document.getElementById("apellido");
const nombre = document.getElementById("nombre");
const mail = document.getElementById("mail");
const telefono = document.getElementById("telefono");
const github = document.getElementById("github"), // se puede usar este método tambien para declarar las constantes
  domicilio = document.getElementById("domicilio"),
  foto = document.getElementById("foto");
const listaContactos = [];
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
const limpiarform = () => {
  formContacto.reset();
};
const guardarEnLocalStorage = () => {
  localStorage.setItem("listaContactosKey", JSON.stringify(listaContactos));
};
//aqui agrego el resto de la logica
btnNuevo.addEventListener("click", mostrarModal);
formContacto.addEventListener("submit", crearContacto);
