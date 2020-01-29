import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Burguers from './views/Burguers.vue';
import AddBurguer from './views/AddBurguer.vue';
import UpdateBurguer from './views/UpdateBurguer.vue';
import Burguer from './views/Burguer.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/hamburguesas',
      name: 'hamburguesas',
      component: Burguers,
    },
    {
      path: '/hamburguesas/add',
      name: 'agregar hamburguesa',
      component: AddBurguer,
    },
    {
      path: '/hamburguesas/update/:id',
      name: 'actualizar hamburguesa',
      component: UpdateBurguer,
    },
    {
      path: '/hamburguesas/read/:id',
      name: 'hamburguesas',
      component: Burguer,
    },
  ],
});
