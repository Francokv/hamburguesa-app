<template>
    <div class='card d-inline-block m-2' style="width: 14rem;">
      <router-link v-bind:to="'/hamburguesas/read/' + id" class="text-decoration-none">
        <div style='height: 3rem'>
          <h5 class='card-title text-center mt-3'>{{nombre}}</h5>
        </div>

        <h6 class="card-subtitle m-4 text-muted text-left text-decoration-none">Calorias : {{calorias}}</h6>
      </router-link>

      <div class="mb-3"> 
        <router-link class="btn mr-2" v-bind:to="'/hamburguesas/update/' + id" style="background-color: #42b983; color: white;">Editar</router-link>
        <input class="btn btn-danger" type="button" value="Eliminar" v-on:click="removeBurguer">
      </div>
    </div>
</template>

<script>
export default {
  name: 'BurguerCard',
  props: ['nombre', 'calorias', 'id'],
  methods: {
    removeBurguer() {
      this.$http.delete('https://prueba-hamburguesas.herokuapp.com/burguer/' + this.id)
        .then(() => this.$emit('remove'));
    },
  },
};
</script>
