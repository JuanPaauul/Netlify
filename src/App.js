const nombre = document.querySelector("#nombre-input");
const genero = document.querySelector("#genero-input");
const edad = document.querySelector("#edad-input");
const idioma = document.querySelector("#idioma-input");
const form = document.querySelector("#saludador-form");

form.addEventListener("submit", (event) => {
  var d = new Date();
  var h = d.getHours();
  var hora = "buen dia ";
  var saludo = "Hola ";
  var generoSaludo = "señor";
  if(parseInt(edad.value)>30){
    if(genero.value == "Femenino")
      generoSaludo = "señora";
    saludo = saludo + generoSaludo;
  }
  if(h>12)
    hora = "buenas tardes ";
  if(h>16)
    hora = "buenas noches ";
  alert(saludo + ", "+ hora + nombre.value);
});
