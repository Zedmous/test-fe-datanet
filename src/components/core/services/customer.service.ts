import { environment } from '@/env';
import axios from 'axios';
import { CustomerInterface } from '@/components/core/interfaces';

export class CustomerService {
  private ruta:string="/customers";
  constructor() { 
  }

  async getAllCustomer(){
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
  async getOneCustomer(id:number){
    try {
      const response = await axios.get(`${environment.apiUrl}${this.ruta}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los registros:', error);
    }
  }
  
  async createCustomer(customer:CustomerInterface){
    try {
      const response = await axios.post(`${environment.apiUrl}${this.ruta}`,customer);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los registros:', error);
    }
  }
  async updateCustomer(id:number,customer:CustomerInterface){
    try {
      const response = await axios.put(`${environment.apiUrl}${this.ruta}/${id}`,customer);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los registros:', error);
    }
  }
  async deleteCustomer(id:number|any){
    try {
      const response = await axios.delete(`${environment.apiUrl}${this.ruta}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los registros:', error);
    }
  }
}
