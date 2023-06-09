Vue.component("postmensajes", {
  template: `
      <div>
      <div id="iniciasesionmensajes" style="display:block;">
      <h1>Inicia sesión para dejar un mensaje</h1>
      </div>
        
      <div id="formulario-mensajes" style="display:none;" >
      <h1 >Formulario de Comentarios</h1>
      <form  @submit.prevent="enviarComentario"> 
      <label for="comment">Comentario:</label>
          <input type="text" id="comment" v-model="comment" placeholder="Escribe tu comentario..." required>
  
          <button type="submit">Enviar</button>
        </form>
        </div>
      </div>
    `,
  data() {
    return {
      comment: "", // Variable para almacenar el comentario ingresado por el usuario
    };
  },
  methods: {
    enviarComentario() {
      // Realizar la solicitud POST utilizando fetch
      fetch("https://gerpidot.pythonanywhere.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: this.comment,
          user_id: localStorage.getItem("user_id"),
          title: localStorage.getItem("user_name"),
        }),
      })
        .then((response) => {
          // Verificar si la respuesta es exitosa
          if (response.ok) {
            return response.json();
          }
          throw new Error("Error en la solicitud");
        })
        .then((data) => {
          // Lógica para manejar la respuesta exitosa
          console.log(data);
          // Emitir el evento personalizado 'nuevo-comentario' y pasar el nuevo comentario como argumento
          this.$root.$emit("nuevo-mensaje", data);
          // Aquí puedes realizar cualquier acción adicional según tu aplicación
        })
        .catch((error) => {
          // Lógica para manejar el error en caso de que la solicitud falle
          console.error(error);
        });
    },
  },
});
