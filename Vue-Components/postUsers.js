Vue.component("newuser", {
  template: `<div>
  <div style="display: flex;justify-content: right;">
  <button type="button" @click="showLoginForm">< Volver</button>
  </div>
      <form @submit.prevent="submitForm">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="nombre">
  
        <label for="apellido">Apellido:</label>
        <input type="text" id="apellido" v-model="apellido">
  
        <label for="email">Email:</label>
        <input type="email" id="email2" v-model="email">
  
        <label for="contrasena">Contraseña:</label>
        <input type="text" id="contrasena" v-model="contrasena">
  
        <button type="submit">Registrarse</button>
      </form></div>
    `,
  data() {
    return {
      nombre: "",
      apellido: "",
      email: "",
      contrasena: "",
    };
  },
  methods: {
    submitForm() {
      // Aquí puedes realizar la solicitud POST con los datos del nuevo usuario

      const userData = {
        name: this.nombre,
        lastname: this.apellido,
        email: this.email,
        password: this.contrasena,
        token: "ya veremos que hacer con esto",
      };
      let userArray = Object.entries(userData);
      console.log(userArray);
      //Si los campos están vacios se devuelve un alert
      let stop = false;
      for (let i = 0; i < userArray.length; i++) {
        if (userArray[i][1] === "") {
          alert("Todos los campos son necesarios");
          stop = true;
          break; // Break out of the loop when the condition is met
        }
      }
      if (stop) {//corta la función aquí
        return;
      }
      // Se hace el post al server
      // Realizar la solicitud POST utilizando fetch
      fetch("http://gerpidot.pythonanywhere.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
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
          alert(data.message);
          this.showLoginForm();
          console.log(data);
        })
        .catch((error) => {
          // Lógica para manejar el error en caso de que la solicitud falle
          console.error(error);
        });

      // Restablecer los campos del formulario después de enviar los datos
      this.nombre = "";
      this.apellido = "";
      this.email = "";
      this.contrasena = "";
    },
    showLoginForm() {
      //Mostramos el form de inicio que está oculto
      document.getElementById("loginform").style.display = "block";
      //Escondemos el form de new user
      document.getElementById("newuserform").style.display = "none";
    },
  },
});
