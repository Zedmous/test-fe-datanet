<template src="./list-sales.components.html">
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import FormSale from '../form/form-sales.components.vue';
import { ModalSaleComponent, SaleInterface } from '@/components/core/interfaces';
import { SaleService } from '@/components/core/services';
const saleService = new SaleService();
const updateKey = ref(0);
export default defineComponent({
  name: 'list-sales',
  components: {
    FormSale,
  },
  setup() {
    
    const sales = ref<Array<SaleInterface>>([]);
    const obtenerRegistros = async () => {
      try {
        
        let { data, message, status } = await saleService.getAllSale();
        sales.value = data.sales;
        console.log(status, message)
      } catch (error) {
        console.error('Error al obtener los registros:', error);
      }
    };
    onMounted(() => {
      obtenerRegistros();
    });

    return {
      sales,
    };
  },
  methods: {
    abrirModal(cliente: SaleInterface,op:string) {
      const modal = this.$refs.modalSale as ModalSaleComponent;
      modal.abrirModal(cliente,op);
    },
    agregarSale(cliente: SaleInterface,op:string) {
      if(op=="r"){
        this.sales.push(cliente);
      }
      if(op=="u"){
        const index=this.sales.findIndex((element: SaleInterface) => element.id ==cliente.id);
        this.sales[index] = cliente;
        updateKey.value++;
      }
      
    },
    async eliminarSale(cliente: SaleInterface,indice:number){
      let { data, message, status } = await saleService.deleteSale(cliente.id);
      this.sales.splice(indice, 1);
      
    }
  }
});
</script>

<style scoped src="./list-sales.components.css"></style>