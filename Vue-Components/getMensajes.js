Vue.component("mensajes", {
  template: `
    <div  >
    <div class="message-container">
      <div class="message" v-for="item in items" :key="item.id">
      <div class= "vueTitle">
      <div class="message-title">{{item.title}}</div>
      </div>
      <div class="vueContent">
      <div class="message-content">{{item.content}}</div>
      </div>
      
      </div>
      </div>
      
   </div>
   
      

  `,
  data() {
    return {
      items: [], // Array donde almacenaremos los resultados de la respuesta
    };
  },
  created() {
    // Aquí es donde obtendrías la respuesta y la asignarías a la propiedad "items"
    // Por ejemplo, si estás obteniendo los datos de una API, puedes hacerlo en el hook "created":
    this.fetchData();
  },
  mounted() {
    // Suscribirse al evento personalizado 'nuevo-comentario' para recibir los comentarios actualizados
    this.$root.$on("nuevo-mensaje", (comment) => {
      this.items.push(comment);
    });
  },
  methods: {
    fetchData() {
      // Aquí realizarías la llamada a la API y asignarías los resultados a "items"
      // Por ejemplo, usando la función fetch de JavaScript:
      fetch("https://gerpidot.pythonanywhere.com/posts")
        .then((response) => response.json())
        .then((data) => {
          let ordered =data.sort((a,b)=>{return b.id-a.id})
          this.items = ordered;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
});
