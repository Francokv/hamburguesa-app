<template>
  <div class="container">
    <div class="mx-auto m-2" style="width: 24rem">
      <h3 class="mb-5 mt-2">Ver Hambuguesa</h3>

      <div class="input-group flex-nowrap mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Nombre</span>
        </div>
        <span
          type="text"
          name="nombre"
          class="form-control"
        >
          {{nombre}}
        </span>
      </div>

      <div class="input-group flex-nowrap mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Calorias</span>
        </div>
        <span
          type="number"
          name="calorias"
          class="form-control"
        >
          {{calorias}}
        </span>
      </div>

      <h5 class="text-left">Ingredientes</h5>

      <ul class="list-group mb-3">
        <li class="input-group mb-1" v-for="ing in ingredientes" v-bind:key="ing">
          <span class="form-control">{{ing}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UpdateBurguer',
  data() {
    return {
      nombre: '',
      calorias: '',
      ingredientes: [],
    };
  },

  created() {
    this.$http.get('https://prueba-hamburguesas.herokuapp.com/burguer')
      .then((response) => {
        const burguerId = this.$route.params.id;

        const { nombre, calorias, ingredientes } = response.data.find(burguer => burguer._id === burguerId);

        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.calorias = calorias.toString();
      });
  },
};
</script>
