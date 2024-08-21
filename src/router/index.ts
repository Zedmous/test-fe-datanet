import { createRouter, createWebHistory } from 'vue-router';
import Products from '../components/pages/products/list/list-products.components.vue';
import Clients from '../components/pages/clients/list/list-customers.components.vue';
import Sales from '../components/pages/sales/list/list-sales.components.vue';
import Taxes from '../components/pages/taxes/list/list-taxes.components.vue';

const routes = [
  { path: '/products', name: 'Products', component: Products },
  { path: '/clients', name: 'Clients', component: Clients },
  { path: '/sales', name: 'Sales', component: Sales },
  { path: '/taxes', name: 'Taxes', component: Taxes },
  //{ path: '/', redirect: '/products' }  // Redirigir a /products por defecto
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;