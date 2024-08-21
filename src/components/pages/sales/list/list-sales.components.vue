<template src="./list-sales.components.html">
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import FormSale from '../form/form-sales.components.vue';
import { SaleService } from '@/components/core/services';
import { ModalSaleComponent, SaleInterface } from '@/components/core/interfaces';
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
        console.log(status, message,data)
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
    abrirModal(sale: SaleInterface,op:string) {
      const modal = this.$refs.modalSale as ModalSaleComponent;
      modal.abrirModal(sale,op);
    },
    agregarSale(sale: SaleInterface,op:string) {
      if(op=="r"){
        this.sales.push(sale);
      }
      if(op=="u"){
        const index=this.sales.findIndex((element: SaleInterface) => element.id ==sale.id);
        this.sales[index] = sale;
        updateKey.value++;
      }
      
    },
    async eliminarSale(sale: SaleInterface,indice:number){
      let { data, message, status } = await saleService.deleteSale(sale.id);
      this.sales.splice(indice, 1);
      
    }
  }
});
</script>

<style scoped src="./list-sales.components.css"></style>