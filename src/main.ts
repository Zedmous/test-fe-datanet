import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router';
import 'bootstrap'; // Importar Bootstrap JavaScript
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
createApp(App)
  .use(router)   // Incluir Vue Router
  .use(store)    // Incluir Vuex
  .mount('#app');
