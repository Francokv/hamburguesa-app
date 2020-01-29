<template>
  <div class="container">
    <ul>
      <li v-for="burguer in burguers" v-bind:key="burguer.id" class='d-inline-block'>
        <BurguerCard
        v-bind:nombre="burguer.nombre"
        v-bind:calorias="burguer.calorias"
        v-bind:id="burguer._id"
        v-on:remove="getBurgers"
        >
        </BurguerCard>
      </li>
    </ul>
  </div>
</template>

<script>
import BurguerCard from '../components/BurguerCard.vue';

export default {
  name: 'Burguers',
  data() {
    return {
      burguers: [],
    };
  },
  components: {
    BurguerCard,
  },
  mounted() {
    this.getBurgers();
  },
  methods: {
    getBurgers() {
      this.$http.get('https://prueba-hamburguesas.herokuapp.com/burguer')
        .then((reponse) => { this.burguers = reponse.data; }); 
    },
  },
};
</script>

