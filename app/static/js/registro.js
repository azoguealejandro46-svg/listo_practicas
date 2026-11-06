const formulario = document.getElementById("registro");
const listaErrores = document.getElementById("errores");
formulario.addEventListener("submit", (evento) => {
  const nombre = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const clave = document.getElementById("password").value;
  const claveRepetida = document.getElementById("confirm").value;
  const errores = [];
  if (nombre === "") {
    errores.push("El nombre es obligatorio.");
  }
  if (!email.includes("@")) {
    errores.push("El correo debe contener una arroba.");
  }
  if (clave.length < 6) {
    errores.push("La contraseña necesita al menos 6 caracteres.");
  }
  if (clave !== claveRepetida) {
    errores.push("Las contraseñas no coinciden.");
  }
  listaErrores.innerHTML = "";
  for (const error of errores) {
    const elemento = document.createElement("li");
    elemento.textContent = error;
    listaErrores.appendChild(elemento);
  }
  if (errores.length > 0) {
    evento.preventDefault();
  }
});