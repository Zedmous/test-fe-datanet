import { environment } from '@/env';
import axios from 'axios';
import { ProductInterface } from '@/components/core/interfaces';

export class ProductService {
  private ruta:string="/products";
  constructor() { 
  }

  async getAllProduct(){
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
  async getOneProduct(id:number){
    try {
      const response = await axios.get(`${environment.apiUrl}${this.ruta}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los registros:', error);
    }
  }
  
  async createProduct(product:ProductInterface){
    try {
      const response = await axios.post(`${environment.apiUrl}${this.ruta}`,product);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los registros:', error);
    }
  }
  async updateProduct(id:number,product:ProductInterface){
    try {
      const response = await axios.put(`${environment.apiUrl}${this.ruta}/${id}`,product);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los registros:', error);
    }
  }
  async deleteProduct(id:number|any){
    try {
      const response = await axios.delete(`${environment.apiUrl}${this.ruta}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los registros:', error);
    }
  }
}
