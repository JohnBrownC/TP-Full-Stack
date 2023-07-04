const showAuthModal = () => {
    var modal = document.getElementById("loginModal");
   document.documentElement.style.overflow="hidden"
    
    modal.style.display = "block"; // Mostrar el modal cambiando el estilo CSS 
};

function closeModal() {
  var modal = document.getElementById("loginModal");
  document.documentElement.style.overflow="auto"
  modal.style.display = "none"; // Ocultar el modal cambiando el estilo CSS
}
