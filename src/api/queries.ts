import { useQuery } from '@tanstack/react-query';
import client from './client';
import { CartItem } from 'src/types/cartItem';

const fetchCartItems = async (): Promise<CartItem[]> => {
  const { data } = await client.get('cartItems/6633317abae5f954393f0094');
  return data;
};

export const useCartItemsQuery = () =>
  useQuery({
    queryKey: ['cartItems'],
    queryFn: fetchCartItems
  });
