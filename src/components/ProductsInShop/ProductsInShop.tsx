import { useQuery } from '@tanstack/react-query';
import ProductItem from 'src/components/ProductItem';
import { Product } from 'src/types/product';
import http from 'src/utils/http';

export default function ProductsInShop() {
  const { data: productsData, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: () => http.get('/products')
  });
  const products: Product[] = productsData?.data?.data || [];

  return (
    <div className=' px-[10rem] pt-10 pb-16'>
      <div className='grid grid-cols-4 gap-6'>
        {isLoading && <p>Loading...</p>}

        {!isLoading &&
          products.length > 0 &&
          products.map((product: Product) => <ProductItem key={product._id} product={product} />)}
      </div>
    </div>
  );
}
