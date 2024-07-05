import { ICartItem } from './cartItem';

export default interface IOrder {
  id: string;
  items: ICartItem[];
}
