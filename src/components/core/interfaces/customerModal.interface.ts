import { CustomerInterface } from "./customer.interface";

export interface ModalCustomerComponent {
  abrirModal(customer: CustomerInterface,op?:string): void;
}
