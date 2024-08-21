import { CustomerInterface } from "./customer.interface";

export interface ModalClienteComponent {
  abrirModal(cliente: CustomerInterface,op?:string): void;
}
