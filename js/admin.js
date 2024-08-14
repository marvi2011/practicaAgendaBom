import { Contacto } from "./classContactos.js";
// aqui voy a agregar toda la logica del CRUD
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
