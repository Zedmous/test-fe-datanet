import { SaleInterface } from "./sale.interface";
export interface ModalSaleComponent {
  abrirModal(sale: SaleInterface,op?:string): void;
}
