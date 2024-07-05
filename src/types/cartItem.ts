import { IProduct } from './product';

export interface ICartItem {
  id: string;
  product: IProduct;
  quantity: number;
  image: string[];
}
