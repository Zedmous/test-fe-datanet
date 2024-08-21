import { SaleDetailInterface } from "./sale_detail.interface";

export interface ModalSaleDetailComponent {
  abrirModal(sale_detail: SaleDetailInterface,op?:string): void;
}
