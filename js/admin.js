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
//console.log(modalContacto);
//modalContacto.show();

//ahora van las funciones
const mostrarModal = () => {
  modalContacto.show();
};

//aqui agrego el resto de la logica
btnNuevo.addEventListener("click", mostrarModal);
