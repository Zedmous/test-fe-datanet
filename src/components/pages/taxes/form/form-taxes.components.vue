<template src="./form-taxes.components.html">
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as bootstrap from 'bootstrap';
import { TaxService } from '@/components/core/services';
import { TaxInterface } from '@/components/core/interfaces';
const taxService = new TaxService();
let tax:TaxInterface|any={};
export default defineComponent({
  data() {
    
    return {
      tax:tax,
      op:""
    };
  },
  methods: {
    async guardar(){
      // Lógica para guardar o actualizar el tax
      if(this.op=="r"){
        let { data, message, status } = await taxService.createTax(this.tax);
        this.$emit('tax-agregado', data.tax,"r");
      }
      if(this.op=="u"){
        let { data, message, status } = await taxService.updateTax(this.tax.id,this.tax);
        this.$emit('tax-agregado', data.tax,"u");
      }
      
      // Cerrar el modal después de guardar
      const modal = document.getElementById('modalTax');
      if (modal) {
        const bsModal = bootstrap.Modal.getInstance(modal);
        if (bsModal) {
          bsModal.hide();
        }
      }
    },
    abrirModal(tax:TaxInterface,op:string) {
      this.tax = { ...tax }; // Asignar los datos del tax al modal
      this.op=op;
      const modal = new bootstrap.Modal(document.getElementById('modalTax'));
      modal.show(); // Mostrar el modal
    }
  }
});
</script>

<style scoped src="">
</style>