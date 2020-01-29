<template>
  <div class="container">
    <div class="mx-auto m-2" style="width: 24rem">
      <h3 class="mb-5 mt-2">Agregar Hambuguesa</h3>

      <div class="input-group flex-nowrap mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Nombre</span>
        </div>
        <input
          type="text"
          name="nombre"
          class="form-control"
          v-on:change="inputHandler"
          v-bind:value="nombre"
        />
      </div>

      <div class="input-group flex-nowrap mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Calorias</span>
        </div>
        <input
          type="number"
          name="calorias"
          class="form-control"
          v-bind:value="calorias"
          v-on:change="inputHandler"
        />
      </div>

      <h5 class="text-left">Ingredientes</h5>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          name="ingrediente"
          id="ingrediente"
          v-on:change="inputHandler"
          v-bind:value="ingrediente"
        />
        <div class="input-group-append">
          <button class="btn btn-primary" type="button" v-on:click="addIngredient">Agregar</button>
        </div>
      </div>

      <h6 class="text-left">Lista de imgredientes</h6>

      <ul class="list-group mb-3">
        <li class="input-group mb-1" v-for="ing in ingredientes" v-bind:key="ing">
          <span class="form-control">{{ing}}</span>
          <div class="input-group-append">
            <button
              class="btn btn-danger"
              type="button"
              v-bind:name="ing"
              v-on:click="removeIngredient"
            >borrar</button>
          </div>
        </li>
      </ul>

      <div>
        <button
          class="btn btn-primary w-100"
          type="button"
          v-on:click="addBurguer"
        >Agregar Hamburguesa</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddBurguer',
  data() {
    return {
      nombre: '',
      calorias: '',
      ingrediente: '',
      ingredientes: [],
    };
  },
  methods: {
    addBurguer() {
      if (this.nombre !== '') {
        const args = {};
        args.nombre = this.nombre;
        args.calorias = parseInt(this.calorias, 10);
        args.ingredientes = this.ingredientes;

        this.$http.post(
          'https://prueba-hamburguesas.herokuapp.com/burguer',
          args,
        );
        alert('Hamburguesa agregada exitosamente');
        this.nombre = '';
        this.calorias = '';
        this.ingrediente = '';
        this.ingredientes = [];
      } else {
        alert('El nombre es un campo obligatorio');
      }
    },
    inputHandler(event) {
      const { value, name } = event.target;
      this[name] = value;
    },
    addIngredient() {
      if (
        this.ingrediente !== '' &&
        !this.ingredientes.includes(this.ingrediente)
      ) {
        this.ingredientes.push(this.ingrediente);
        this.ingrediente = '';
      }
    },
    removeIngredient(event) {
      const i = this.ingredientes.indexOf(event.target.name);

      if (i !== -1) {
        this.ingredientes.splice(i, 1);
      }
    },
  },
};
</script>
