<template src="./form-customers.components.html">
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as bootstrap from 'bootstrap';
import { CustomerService } from '@/components/core/services';
import { CustomerInterface } from '@/components/core/interfaces';
const customerService = new CustomerService();
let customer:CustomerInterface|any={};
export default defineComponent({
  data() {
    
    return {
      customer:customer,
      op:""
    };
  },
  methods: {
    async guardar(){
      // Lógica para guardar o actualizar el customer
      if(this.op=="r"){
        let { data, message, status } = await customerService.createCustomer(this.customer);
        this.$emit('customer-agregado', data.customer,"r");
      }
      if(this.op=="u"){
        let { data, message, status } = await customerService.updateCustomer(this.customer.id,this.customer);
        this.$emit('customer-agregado', data.customer,"u");
      }
      // Cerrar el modal después de guardar
      const modal = document.getElementById('modalCustomer');
      if (modal) {
        const bsModal = bootstrap.Modal.getInstance(modal);
        if (bsModal) {
          bsModal.hide();
        }
      }
    },
    abrirModal(customer:CustomerInterface,op:string) {
      this.customer = { ...customer }; // Asignar los datos del customer al modal
      this.op=op;
      const modal = new bootstrap.Modal(document.getElementById('modalCustomer'));
      modal.show(); // Mostrar el modal
    }
  }
});
</script>

<style scoped src="">
</style>