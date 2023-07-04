Vue.component("password-recovery", {
  template: `
      <div>
        <label for="email">Email:</label>
        <input type="email" id="emailforgot" v-model="email">
        <button @click="showLoginForm">Volver</button>
        <button @click="recoverPassword">Recuperar</button>

        <p id="respuestadelserver"></p>
      </div>
    `,
  data() {
    return {
      email: "",
    };
  },
  methods: {
    recoverPassword() {
      // Simular la llamada al servidor para recuperar la contraseña
      // Realizar la solicitud POST utilizando fetch
      fetch("https://gerpidot.pythonanywhere.com/users/forgot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
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
          document.getElementById("respuestadelserver").textContent =
            data.message;
        })
        .catch((error) => {
          // Lógica para manejar el error en caso de que la solicitud falle
          console.error(error);
        });
    },
    showLoginForm() {
        //Mostramos el from de regístro que está oculto
        document.getElementById("passwordRecovery").style.display = "none";
        //Escondemos este formulario
        document.getElementById("loginform").style.display = "block";
      },
  },
});
