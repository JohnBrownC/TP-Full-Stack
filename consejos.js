const tituloConsejoArray = [
  "1. ENTRENA PARA TENER UN BUEN OJO PARA LA FOTOGRAFÍA",
  "2. COMPRENDE CÓMO FUNCIONA LA LUZ EN FOTOGRAFÍA",
  "3. DOMINA LOS ELEMENTOS BÁSICOS DE LA FOTOGRAFÍA",
  "4. APRENDE LAS REGLAS BÁSICAS DE COMPOSICIÓN EN FOTOGRAFÍA",
];
const consejosArray = [
  "Es cierto que suena a cliché, pero realmente es el consejo de fotografía para principiantes más importante. Lo que significa es que mires a las cosas con una imagen final en mente. Me gusta referirme a esto como lo hizo el gran fotógrafo Ansel Adams: previsualización.Observa una escena e imagina lo que podrías hacer fotográficamente con ella. Porque la fotografía es más que apretar un botón. Estás creando una imagen, tal vez incluso una obra de arte, de lo que está frente a tus ojos. Sé observador antes de ponerte a disparar sin sentido.",
  "El siguiente consejo para principiantes en fotografía consiste en entender como funciona la luz. Por supuesto que sabes qué es la luz, pero ¿cómo funciona la luz en fotografía? El término fotografía en realidad significa dibujar con luz y, para aprender fotografía, tendrás que entender y manejar la luz. Los parámetros básicos de la cámara te ayudarán a conseguir una buena imagen. Además, aprender las técnicas básicas de fotografía, así como los elementos esenciales de la fotografía, son la base para crear imágenes que atrapen al espectador. Sin embargo, usar la luz será lo que haga que tu fotografía destaque sobre el resto.",
  "Las tres variables que controlan la exposición son la apertura de diafragma o f-stop, la velocidad de obturación, y el ISO. Comprender el triángulo de exposición, te dará control sobre la imagen final. Usando el modo prioridad a la apertura o el modo prioridad a la velocidad de obturación, aprenderás de forma más sencilla los ajustes de exposición básicos y podrás poner en práctica otras técnicas fotográficas básicas como congelar el movimiento de una escena, la creación de una larga exposición diurna con velocidades de obturación lentas, o el control de la profundidad de campo usando diferentes aperturas de diafragma.",
  "Una de las reglas básicas de composición presente en cualquier lista de consejos fotográficos para principiantes es la regla de los tercios. Esta regla te ayudará a componer tus fotografías de forma equilibrada y sencilla desde el principio. Pero también hay otros tipos de composiciones fotográficas fáciles de implementar. Según vayas aprendiendo nuevas reglas de composición, deberás prestar atención a las líneas guía, las curvas en “S”, la proporción áurea y el equilibrio dentro del marco de la imagen. Todos estos principios de composición pueden ser utilizados por fotógrafos principiantes con cualquier tipo de cámara; tanto un iPhone/Smartphone como cualquier cámara digital (sea reflex o mirrorless) sirven para practicar distintos tipos de composición fotográfica.",
];

//index
let currentIndex = 0;
//obtener los elementos

let titleAdvise = document.getElementById("advise-title");
let contentAdvise = document.getElementById("advise-content");

titleAdvise.textContent = tituloConsejoArray[0];
contentAdvise.textContent = consejosArray[0];

const manageAdvises = (isNext) => {
  let length = tituloConsejoArray.length;

  if (isNext) {
    currentIndex = (currentIndex + 1 + length) % length;
    titleAdvise.textContent = tituloConsejoArray[currentIndex];
    contentAdvise.textContent = consejosArray[currentIndex];
  }

  if (!isNext) {
    currentIndex = (currentIndex - 1 + length) % length;
    titleAdvise.textContent = tituloConsejoArray[currentIndex];
    contentAdvise.textContent = consejosArray[currentIndex];
  }
};
