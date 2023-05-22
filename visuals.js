//Elimina el id de la sección de la url despues de navegar  a través del anchor
//
history.scrollRestoration = "manual";

const removeAnchorFromURL = () => {
  setTimeout(() => {
    window.history.replaceState({}, "", window.location.href.split("#")[0]);
  }, 1);
};

//show menu bar

const openCloseMenubar = () => {
  const navBar = document.getElementById("nav-menu");
  const navBurguer = document.getElementById("hamburBtn");

  console.log("display", navBar.style.display);
  if (navBar.style.display === "") {
    navBurguer.style.transform = "rotate(90deg)";
    navBar.style.display = "block";
  } else {
    navBurguer.style.transform = "rotate(0deg)";
    navBar.style.display = "";
  }
};

const contactUsValidations = (event) => {
  let email = document.getElementById("email");
  let name = document.getElementById("name");
  let message = document.getElementById("message");
  let agree = document.getElementById("agree").checked;
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  if (email.value == "" || name.value == "" || message.value == "") {
    return alert("Completa todos los campos para continuar");
  }
  if (!email.value.match(emailRegex)) {
    return alert("Eso no parece un email");
  }
  if (!agree) {
    return alert("Acepta nuestros terminos y condiciones para continuar");
  }
  //Se obtiene el btn de submit para cambiar el value
  const btn = document.getElementById("submit-button");

  //se define la función para enviar email

  event.preventDefault();
  btn.value = "Enviando...";

  const serviceID = "service_wr1l0ng";
  const templateID = "jhonbrown";

  emailjs
    .send(serviceID, templateID, {
      from_name: name.value,
      message: message.value,
      reply_to: email.value,
    })
    .then(() => {
      btn.value = "Enviar";

      alert("Enviado!");
    })
    .catch(() => {
      btn.value = "Enviar";

      alert(JSON.stringify(err));
    });
};

//Mostrar en iframe los terminos y condiciones del sitio
let iframe = document.getElementById("terms");
let terms = iframe.contentDocument;

fetch("terminosYcondiciones.txt")
  .then((response) => response.text())
  .then((data) => {
    // Paso 2: Crea un documento temporal para mantener el formato del txt
    let tempDoc = document.createElement("html");
    tempDoc.style.color="white"
    tempDoc.innerHTML = "<pre>" + data + "</pre>";
    // Paso 3: se completa el iframe con la data
    terms.open();
    terms.write(tempDoc.outerHTML);
    terms.close();
   
  })
  .catch((error) => console.error(error));
