const nombre = document.querySelector("#nombre-input");
const genero = document.querySelector("#genero-input");
const edad = document.querySelector("#edad-input");
const form = document.querySelector("#saludador-form");

form.addEventListener("submit", (event) => {
  var d = new Date();
  var h = d.getHours();
  const hora = "buenos dias ";
  const saludo = "Hola ";
  const generoSaludo = "señor ";
  if(edad.value>30){
    if(genero.value == "Femenino")
      generoSaludo = "señora ";
    saludo = saludo + generoSaludo;
  }
  if(h>12)
    hora = "buenas tardes ";
  if(h>16)
    hora = "buenas noches ";
  alert(saludo + hora + nombre.value + ":" + genero.value + h );
});
