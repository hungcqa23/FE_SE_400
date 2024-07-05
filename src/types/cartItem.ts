import { IProduct } from './product';

export type ICartItem = {
  id: string;
  product: IProduct;
  quantity: number;
  image: string[];
};
