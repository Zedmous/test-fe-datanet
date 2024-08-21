import { TaxInterface } from "./tax.interface";

export interface ModalTaxComponent {
  abrirModal(tax: TaxInterface,op?:string): void;
}
