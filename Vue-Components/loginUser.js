Vue.component("loginform", {
  template: `
      <div>
      <div style="display: flex;justify-content: right;">
  <button type="button" @click="showNewUserForm ">Nuevo usuario</button>
  </div>
        <form @submit.prevent="submitForm">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email">
  
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="password">
  
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
