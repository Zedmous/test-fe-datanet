<template src="./list-customers.components.html">
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import FormCustomer from '../form/form-customers.components.vue';
import { CustomerInterface, ModalCustomerComponent } from '@/components/core/interfaces';
import { CustomerService } from '@/components/core/services';
const customerService = new CustomerService();
const updateKey = ref(0);
export default defineComponent({
  name: 'list-customers',
  components: {
    FormCustomer,
  },
  setup() {
    
    const customers = ref<Array<CustomerInterface>>([]);
    const obtenerRegistros = async () => {
      try {
        
        let { data, message, status } = await customerService.getAllCustomer();
        customers.value = data.customers;
        console.log(status, message)
      } catch (error) {
        console.error('Error al obtener los registros:', error);
      }
    };
    onMounted(() => {
      obtenerRegistros();
    });

    return {
      customers,
    };
  },
  methods: {
    abrirModal(customers: CustomerInterface,op:string) {
      const modal = this.$refs.modalCustomer as ModalCustomerComponent;
      modal.abrirModal(customers,op);
    },
    agregarCustomer(customers: CustomerInterface,op:string) {
      if(op=="r"){
        this.customers.push(customers);
      }
      if(op=="u"){
        const index=this.customers.findIndex((element) => element.id ==customers.id);
        this.customers[index] = customers;
        updateKey.value++;
      }
      
    },
    async eliminarCustomer(customers: CustomerInterface,indice:number){
      let { data, message, status } = await customerService.deleteCustomer(customers.id);
      this.customers.splice(indice, 1);
      
    }
  }
});
</script>

<style scoped src="./list-customers.components.css"></style>