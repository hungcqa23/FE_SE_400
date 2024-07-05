import { IImage } from './image';

export interface IProduct {
  id: string;
  productName: string;
  description: string;
  price: number;
  images: IImage[];
}
