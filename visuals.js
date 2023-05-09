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

const contactUsValidations = () => {
 
  let email = document.getElementById("email");
  let name = document.getElementById("name");
  let message = document.getElementById("message");
  let agree = document.getElementById("agree").checked;
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
 
  if (email.value == "" || name.value == "" || message.value == "") {
    return alert("Completa todos los campos para continuar");
  }
  if(!email.value.match(emailRegex)){
    return alert("Eso no parece un email")
  }
  if (!agree) {
    return alert("Acepta nuestros terminos y condiciones para continuar");
  }
  

  alert("Mensaje enviado con éxito");
};
