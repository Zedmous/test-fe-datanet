<template src="./list-taxes.components.html">
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import FormTax from '../form/form-taxes.components.vue';
import { TaxService } from '@/components/core/services';
import { ModalTaxComponent, TaxInterface } from '@/components/core/interfaces';
const taxService = new TaxService();
const updateKey = ref(0);
export default defineComponent({
  name: 'list-taxes',
  components: {
    FormTax,
  },
  setup() {
    
    const taxes = ref<Array<TaxInterface>>([]);
    const obtenerRegistros = async () => {
      try {
        
        let { data, message, status } = await taxService.getAllTax();
        taxes.value = data.taxes;
        console.log(status, message,data)
      } catch (error) {
        console.error('Error al obtener los registros:', error);
      }
    };
    onMounted(() => {
      obtenerRegistros();
    });

    return {
      taxes,
    };
  },
  methods: {
    abrirModal(tax: TaxInterface,op:string) {
      const modal = this.$refs.modalTax as ModalTaxComponent;
      modal.abrirModal(tax,op);
    },
    agregarTax(tax: TaxInterface,op:string) {
      if(op=="r"){
        this.taxes.push(tax);
      }
      if(op=="u"){
        const index=this.taxes.findIndex((element: TaxInterface) => element.id ==tax.id);
        this.taxes[index] = tax;
        updateKey.value++;
      }
      
    },
    async eliminarTax(tax: TaxInterface,indice:number){
      let { data, message, status } = await taxService.deleteTax(tax.id);
      this.taxes.splice(indice, 1);
      
    }
  }
});
</script>

<style scoped src="./list-taxes.components.css"></style>