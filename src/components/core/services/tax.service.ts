import { environment } from '@/env';
import axios from 'axios';
import { TaxInterface } from '@/components/core/interfaces';

export class TaxService {
  private ruta:string="/taxes";
  constructor() { 
  }

  async getAllTax(){
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
  async getOneTax(id:number){
    try {
      const response = await axios.get(`${environment.apiUrl}${this.ruta}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los registros:', error);
    }
  }
  
  async createTax(tax:TaxInterface){
    try {
      const response = await axios.post(`${environment.apiUrl}${this.ruta}`,tax);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los registros:', error);
    }
  }
  async updateTax(id:number,tax:TaxInterface){
    try {
      const response = await axios.put(`${environment.apiUrl}${this.ruta}/${id}`,tax);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los registros:', error);
    }
  }
  async deleteTax(id:number|any){
    try {
      const response = await axios.delete(`${environment.apiUrl}${this.ruta}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los registros:', error);
    }
  }
}
