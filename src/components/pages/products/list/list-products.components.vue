<template src="./list-products.components.html">
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import FormProducto from '../form/form-products.components.vue';
import { ProductService } from '@/components/core/services';
import { ModalProductoComponent, ProductInterface } from '@/components/core/interfaces';
const productService = new ProductService();
const updateKey = ref(0);
export default defineComponent({
  name: 'list-products',
  components: {
    FormProducto,
  },
  setup() {
    
    const productos = ref<Array<ProductInterface>>([]);
    const obtenerRegistros = async () => {
      try {
        
        let { data, message, status } = await productService.getAllProduct();
        productos.value = data.products;
        console.log(status, message)
      } catch (error) {
        console.error('Error al obtener los registros:', error);
      }
    };
    onMounted(() => {
      obtenerRegistros();
    });

    return {
      productos,
    };
  },
  methods: {
    abrirModal(cliente: ProductInterface,op:string) {
      const modal = this.$refs.modalProducto as ModalProductoComponent;
      modal.abrirModal(cliente,op);
    },
    agregarProducto(cliente: ProductInterface,op:string) {
      if(op=="r"){
        this.productos.push(cliente);
      }
      if(op=="u"){
        const index=this.productos.findIndex((element: ProductInterface) => element.id ==cliente.id);
        this.productos[index] = cliente;
        updateKey.value++;
      }
      
    },
    async eliminarProducto(cliente: ProductInterface,indice:number){
      let { data, message, status } = await productService.deleteProduct(cliente.id);
      this.productos.splice(indice, 1);
      
    }
  }
});
</script>

<style scoped src="./list-products.components.css"></style>