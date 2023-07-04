

Vue.component("loginform", {
  template: `
      <div>
      <div style="display: flex;justify-content: right;">
  <button type="button" @click="showNewUserForm ">Nuevo usuario</button>
  </div>
        <form @submit.prevent="submitForm">
          <label for="email">Email:</label>
          <input type="email" id="emailLogin" v-model="email">
  
          <label for="password">Contraseña:</label>
          <input type="password" id="passwordLogin" v-model="password">
  
          <button type="submit">Iniciar sesión</button>
          
        </form>
       
        <a href="#" @click="forgotPassword">¿Olvidaste tu contraseña?</a>
      </div>
    `,
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      // Simular la solicitud POST al servidor con los datos del formulario
      const formData = {
        email: this.email,
        password: this.password,
      };
      //Validar campos ""
      if (formData.email == "" || formData.password == "") {
        return alert("Completa todos los campos");
      }
      // Se hace el post al server
      // Realizar la solicitud POST utilizando fetch
      fetch("http://gerpidot.pythonanywhere.com/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          // Verificar si la respuesta es exitosa
          if (response.ok) {
            return response.json();
          }
          throw new Error("Error en la solicitud");
        })
        .then((data) => {
          // Lógica para manejar la respuesta
          if (!data.success) {
            return alert(data.message);
          }
          //Se guarda el id del usuario
          localStorage.setItem("user_id", data.user_id);
          localStorage.setItem("user_name", data.name);
          //Se cambia la imagen de usuario por el nombre
          document.getElementById("imagen-usuario").style.display = "none";
          document.getElementById("user-name").style.display = "block";
          //setea la primera letra del nombre 
          document.getElementById("user-name").textContent =
            localStorage.getItem("user_name")[0];
            //cierra el modal y habilita el scroll
            document.getElementById("loginModal").style.display="none"
            document.documentElement.style.overflow="auto"
          //se habilita el uso de mensajes
          document.getElementById("iniciasesionmensajes").style.display =
            "none";
          document.getElementById("formulario-mensajes").style.display =
            "block";

          console.log(data);
        })
        .catch((error) => {
          // Lógica para manejar el error en caso de que la solicitud falle
          console.error(error);
        });
      // Mostrar los datos enviados en la consola
      console.log(formData);

      // Restablecer los campos del formulario después de enviar los datos
      this.email = "";
      this.password = "";
    },
    forgotPassword() {
      // Implementa la lógica para redirigir al componente de restablecimiento de contraseña
      console.log("Olvidaste tu contraseña");
    },
    showNewUserForm() {
      //Mostramos el from de regístro que está oculto
      document.getElementById("newuserform").style.display = "block";
      //Escondemos este formulario
      document.getElementById("loginform").style.display = "none";
    },
  },
});
