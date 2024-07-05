import { useCartItemsQuery } from 'src/api/queries';

const useCartItems = () => {
  const { data, error, isLoading } = useCartItemsQuery();
  return { data, error, isLoading };
};

export default useCartItems;
