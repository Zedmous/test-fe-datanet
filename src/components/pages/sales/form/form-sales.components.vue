<template src="./form-sales.components.html">
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as bootstrap from 'bootstrap';
import { SaleInterface } from '@/components/core/interfaces';
import { SaleService } from '@/components/core/services';
const saleService = new SaleService();
let sale:SaleInterface|any={};
export default defineComponent({
  data() {
    
    return {
      sale:sale,
      op:""
    };
  },
  methods: {
    async guardar(){
      // Lógica para guardar o actualizar el sale
      if(this.op=="r"){
        let { data, message, status } = await saleService.createSale(this.sale);
        this.$emit('sale-agregado', data.sale,"r");
      }
      if(this.op=="u"){
        let { data, message, status } = await saleService.updateSale(this.sale.id,this.sale);
        this.$emit('sale-agregado', data.sale,"u");
      }
      
      // Cerrar el modal después de guardar
      const modal = document.getElementById('modalSaleo');
      if (modal) {
        const bsModal = bootstrap.Modal.getInstance(modal);
        if (bsModal) {
          bsModal.hide();
        }
      }
    },
    abrirModal(sale:SaleInterface,op:string) {
      this.sale = { ...sale }; // Asignar los datos del sale al modal
      this.op=op;
      const modal = new bootstrap.Modal(document.getElementById('modalSaleo'));
      modal.show(); // Mostrar el modal
    }
  }
});
</script>

<style scoped src="">
</style>