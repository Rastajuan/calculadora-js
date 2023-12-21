//Recuperamos del DOM el elemento de la pantalla o display
const pantalla = document.getElementById("pantalla");
//Recuperamos del DOM los elementos  boton en un array
const botones = document.querySelectorAll("#botones a");

// Recorre cada botón en la colección de botones
for (const boton of botones) {
  // Agrega un evento de clic a cada botón
  boton.addEventListener("click", function (e) {
    // Evita que la acción predeterminada del clic ocurra
    e.preventDefault();

    // Si se presiona la tecla "igual", calcula y muestra el resultado
    if (e.target.dataset.key == "igual") {
      // Evalúa la expresión en la pantalla y actualiza el contenido de la pantalla
      pantalla.textContent = eval(pantalla.textContent);

      // Si la longitud del resultado es mayor que 8, redondea el resultado a 8 decimales
      if (pantalla.textContent.length > 8) {
        pantalla.textContent = eval(pantalla.textContent).toFixed(8);
      }
    }

    // Si se presiona la tecla "clear", borra el contenido de la pantalla
    else if (e.target.dataset.key == "clear") {
      pantalla.textContent = "";
    }

    // De lo contrario, agrega la tecla presionada al contenido de la pantalla
    else {
      pantalla.textContent = pantalla.textContent + e.target.dataset.key;
    }
  });
}
