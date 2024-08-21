<template src="./list-clients.components.html">
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import FormCliente from '../form/form-clients.components.vue';
import { CustomerInterface, ModalClienteComponent } from '@/components/core/interfaces';
import { CustomerService } from '@/components/core/services';
const customerService = new CustomerService();
const updateKey = ref(0);
export default defineComponent({
  name: 'list-clients',
  components: {
    FormCliente,
  },
  setup() {
    
    const clientes = ref<Array<CustomerInterface>>([]);
    const obtenerRegistros = async () => {
      try {
        
        let { data, message, status } = await customerService.getAllCustomer();
        clientes.value = data.customers;
        console.log(status, message)
      } catch (error) {
        console.error('Error al obtener los registros:', error);
      }
    };
    onMounted(() => {
      obtenerRegistros();
    });

    return {
      clientes,
    };
  },
  methods: {
    abrirModal(cliente: CustomerInterface,op:string) {
      const modal = this.$refs.modalCliente as ModalClienteComponent;
      modal.abrirModal(cliente,op);
    },
    agregarCliente(cliente: CustomerInterface,op:string) {
      if(op=="r"){
        this.clientes.push(cliente);
      }
      if(op=="u"){
        const index=this.clientes.findIndex((element) => element.id ==cliente.id);
        this.clientes[index] = cliente;
        updateKey.value++;
      }
      
    },
    async eliminarCliente(cliente: CustomerInterface,indice:number){
      let { data, message, status } = await customerService.deleteCustomer(cliente.id);
      this.clientes.splice(indice, 1);
      
    }
  }
});
</script>

<style scoped src="./list-clients.components.css"></style>