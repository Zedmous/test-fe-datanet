<template>
  <div id="app">
    <Dashboard />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Dashboard from './components/shared/dashboard/dashboard.vue';

export default defineComponent({
  name: 'App',
  components: {
    Dashboard
  }
});
</script>

<style>
/* Estilos globales si es necesario */
</style>
