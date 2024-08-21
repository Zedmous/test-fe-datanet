<template src="./form-clients.components.html">
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
      cliente:customer,
      op:""
    };
  },
  methods: {
    async guardar(){
      // Lógica para guardar o actualizar el cliente
      if(this.op=="r"){
        let { data, message, status } = await customerService.createCustomer(this.cliente);
        this.$emit('cliente-agregado', data.customer,"r");
      }
      if(this.op=="u"){
        let { data, message, status } = await customerService.updateCustomer(this.cliente.id,this.cliente);
        this.$emit('cliente-agregado', data.customer,"u");
      }
      // Cerrar el modal después de guardar
      const modal = document.getElementById('modalCliente');
      if (modal) {
        const bsModal = bootstrap.Modal.getInstance(modal);
        if (bsModal) {
          bsModal.hide();
        }
      }
    },
    abrirModal(cliente:CustomerInterface,op:string) {
      this.cliente = { ...cliente }; // Asignar los datos del cliente al modal
      this.op=op;
      const modal = new bootstrap.Modal(document.getElementById('modalCliente'));
      modal.show(); // Mostrar el modal
    }
  }
});
</script>

<style scoped src="">
</style>