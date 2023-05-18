// array con las fotos
const photosArray = [
  "Photos/imagenes galeria/C1.jpg",
  "Photos/imagenes galeria/C2.jpg",
  "Photos/imagenes galeria/M1.jpg",
  "Photos/imagenes galeria/M3.jpg",
  "Photos/imagenes galeria/C3.jpg",
];
const phrasesArray = [
  "La fotografía es el arte de congelar momentos y capturar emociones para toda la eternidad",

  "Una fotografía es un secreto sobre un secreto. Cuanto más te dice, menos sabes",
  "La fotografía es una forma de sentir, de tocar, de amar. Es una forma de vida",
  "La fotografía es una realidad que no se puede explicar. Solo se puede experimentar",
  "La fotografía es un puente que conecta lo visible y lo invisible, lo tangible y lo intangible",
];
//get slider element y div text
const slider = document.getElementById("slider-img");
const slider_text = document.getElementById("slider-text");
//variable para el ńdice
let currentIndexPhoto = 0;
let currentIndexText = 0;

// Variables para almacenar la posición inicial del cursor y del slider
let cursorStartX;

// Registrar el evento de inicio de interacción del usuario
slider.addEventListener("mousedown", startSlide);
slider.addEventListener("touchstart", startSlide);

function startSlide(event) {
  // event.preventDefault(); // Evitar el comportamiento predeterminado del arrastre del navegador

  // Obtener la posición inicial del cursor y del slider
  if (event.type === "mousedown") {
    event.preventDefault();
    cursorStartX = event.clientX;
  } else if (event.type === "touchstart") {
    cursorStartX = event.touches[0].clientX;
  }

  // Registrar eventos de seguimiento de movimiento
  document.addEventListener("mousemove", moveSlide);
  document.addEventListener("touchmove", moveSlide);

  // Registrar evento de finalización de interacción
  document.addEventListener("mouseup", stopSlide);
  document.addEventListener("touchend", stopSlide);
}

function moveSlide(event) {
  // event.preventDefault(); // Evitar el comportamiento predeterminado del arrastre del navegador
  let cursorX;
  // Calcular el desplazamiento del cursor o del dedo
  if (event.type === "mousemove") {
    cursorX = event.clientX;
  } else if (event.type === "touchmove") {
    cursorX = event.touches[0].clientX;
  }
  //offset, esta diferencia evita el cambio involuntario cuando 
  //se usa el celular, sinó un simple touch cambia la foto
  //al deslizar la pantalla hacia abajo o arriba
  let offset = Math.abs(cursorStartX - cursorX);
  //si mueve a la derecha
  if (cursorStartX < cursorX && offset > 80) {
    currentIndexPhoto =
      (currentIndexPhoto - 1 + photosArray.length) % photosArray.length;
    currentIndexText =
      (currentIndexText - 1 + photosArray.length) % photosArray.length;
    slider.src = photosArray[currentIndexPhoto];
    slider_text.textContent = phrasesArray[currentIndexText];
    document.removeEventListener("mousemove", moveSlide);
    document.removeEventListener("touchmove", moveSlide);
    return;
  }
  //si mueve a la izq
  if (cursorStartX > cursorX && offset > 80) {
    currentIndexPhoto =
      (currentIndexPhoto + 1 + photosArray.length) % photosArray.length;
    currentIndexText =
      (currentIndexText + 1 + photosArray.length) % photosArray.length;

    slider.src = photosArray[currentIndexPhoto]; //setea la imagen
    slider_text.textContent = phrasesArray[currentIndexText]; //setea el texto
    document.removeEventListener("mousemove", moveSlide); //corta los evento, sino no deja de pasar  imagenes
    document.removeEventListener("touchmove", moveSlide);
    return;
  }
}
function stopSlide(event) {
  // Eliminar eventos de seguimiento de movimiento
  document.removeEventListener("mousemove", moveSlide);
  document.removeEventListener("touchmove", moveSlide);

  // Eliminar evento de finalización de interacción
  document.removeEventListener("mouseup", stopSlide);
  document.removeEventListener("touchend", stopSlide);
}

//set propiedad del img y el texto
slider.src = photosArray[currentIndexPhoto];
slider_text.textContent = phrasesArray[currentIndexText];

//manejo del índice en el slide-nav y nro de elemento p dentro-- p fue arbitrario
const slider_nav = document.getElementById("slider-nav");
//se agrega un elemeto p por cada valor en el array de photos
photosArray.map((el, index) => {
  const nuevoElemento = document.createElement("p"); //se crea el elemento
  //se setea el evento
  nuevoElemento.addEventListener("mousedown", function () {
    slider.src = photosArray[index];
    slider_text.textContent = phrasesArray[index];
    
    return;
  });
  slider_nav.appendChild(nuevoElemento);
});

//movimiento automático de las imagenes

setInterval(() => {
  currentIndexPhoto =
    (currentIndexPhoto + 1 + photosArray.length) % photosArray.length;
  currentIndexText =
    (currentIndexText + 1 + photosArray.length) % photosArray.length;
  slider.src = photosArray[currentIndexPhoto];
  slider_text.textContent = phrasesArray[currentIndexText];
}, 10000);
