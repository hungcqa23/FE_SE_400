import { useQuery } from '@tanstack/react-query';
import client from './client';
import { ICartItem } from 'src/types/cartItem';

const fetchCartItems = async (): Promise<ICartItem[]> => {
  const { data } = await client.get('cartItems/6633317abae5f954393f0094');
  return data;
};

export const useCartItemsQuery = () =>
  useQuery({
    queryKey: ['cartItems'],
    queryFn: fetchCartItems
  });
