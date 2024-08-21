import { ProductInterface } from "./product.interface";

export interface ModalProductoComponent {
  abrirModal(product: ProductInterface,op?:string): void;
}
