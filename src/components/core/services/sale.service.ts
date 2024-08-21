import { environment } from '@/env';
import axios from 'axios';
import { SaleInterface } from '@/components/core/interfaces';

export class SaleService {
  private ruta:string="/taxes";
  constructor() { 
  }

  async getAllSale(){
    try {
      const response = await axios.get(`${environment.apiUrl}${this.ruta}`);
      const { data, message }=response.data;
      return {
        status:response.status,
        data,
        message
      };
    } catch (error:any) {
      console.error('Error al obtener los registros:', error);
      return error.data;
    }
  }
  async getOneSale(id:number){
    try {
      const response = await axios.get(`${environment.apiUrl}${this.ruta}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los registros:', error);
    }
  }
  
  async createSale(tax:SaleInterface){
    try {
      const response = await axios.post(`${environment.apiUrl}${this.ruta}`,tax);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los registros:', error);
    }
  }
  async updateSale(id:number,tax:SaleInterface){
    try {
      const response = await axios.put(`${environment.apiUrl}${this.ruta}/${id}`,tax);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los registros:', error);
    }
  }
  async deleteSale(id:number|any){
    try {
      const response = await axios.delete(`${environment.apiUrl}${this.ruta}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los registros:', error);
    }
  }
}
