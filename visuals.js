//Elimina el id de la sección de la url despues de navegar  a través del anchor
//
history.scrollRestoration = "manual";

const removeAnchorFromURL = () => {
  setTimeout(() => {
    window.history.replaceState({}, "", window.location.href.split("#")[0]);
  }, 1);
};