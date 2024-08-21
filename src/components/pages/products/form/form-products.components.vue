<template src="./form-products.components.html">
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as bootstrap from 'bootstrap';
import { ProductService } from '@/components/core/services';
import { ProductInterface } from '@/components/core/interfaces';
const productService = new ProductService();
let product:ProductInterface|any={};
export default defineComponent({
  data() {
    
    return {
      producto:product,
      op:""
    };
  },
  methods: {
    async guardar(){
      // Lógica para guardar o actualizar el producto
      if(this.op=="r"){
        let { data, message, status } = await productService.createProduct(this.producto);
        this.$emit('producto-agregado', data.product,"r");
      }
      if(this.op=="u"){
        let { data, message, status } = await productService.updateProduct(this.producto.id,this.producto);
        this.$emit('producto-agregado', data.product,"u");
      }
      
      // Cerrar el modal después de guardar
      const modal = document.getElementById('modalProducto');
      if (modal) {
        const bsModal = bootstrap.Modal.getInstance(modal);
        if (bsModal) {
          bsModal.hide();
        }
      }
    },
    abrirModal(producto:ProductInterface,op:string) {
      this.producto = { ...producto }; // Asignar los datos del producto al modal
      this.op=op;
      const modal = new bootstrap.Modal(document.getElementById('modalProducto'));
      modal.show(); // Mostrar el modal
    }
  }
});
</script>

<style scoped src="">
</style>