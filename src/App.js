const nombre = document.querySelector("#nombre-input");
const genero = document.querySelector("#genero-input");
const edad = document.querySelector("#edad-input");
const form = document.querySelector("#saludador-form");

form.addEventListener("submit", (event) => {
  const saludo = "Hola";
  const generoSaludo = "señor ";
  if(parseInt(edad.value)>30){
    if(genero.value = "Femenino")
      generoSaludo = "señora ";
    saludo = saludo + generoSaludo;
  }
  alert(saludo + nombre.value);
});
