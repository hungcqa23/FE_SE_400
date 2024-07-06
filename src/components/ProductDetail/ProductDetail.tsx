import { useQuery } from '@tanstack/react-query';
import { MoveRight, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductItem from 'src/components/ProductItem';
import RatingStar from 'src/components/RatingStar/RatingStar';
import { Button } from 'src/components/ui/button';
import { formatNumberWithCommas } from 'src/lib/utils';
import { Product } from 'src/types/product';
import http from 'src/utils/http';

export default function ProductDetail() {
  const { id } = useParams();
  const { data: productData, isLoading } = useQuery({
    queryKey: ['products', id],
    queryFn: () => http.get(`/products/${id}`)
  });

  const { data: allProductsData, isLoading: allProductIsLoading } = useQuery({
    queryKey: ['products'],
    queryFn: () => http.get('/products')
  });

  const detailedProduct: Product = productData?.data;
  const allProducts = (allProductsData?.data?.data as Product[]) || [];
  const [quantity, setQuantity] = useState(1);

  const filteredProducts = allProducts?.filter(product => product._id !== id);
  console.log(filteredProducts);
  // get 3 first item
  const randomProducts = filteredProducts?.slice(0, 3);
  randomProducts?.push(filteredProducts[4]);
  console.log(randomProducts);
  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <>
          <div className='mt-[6rem] mb-5 flex flex-row px-[10rem] py-[4rem]'>
            <img
              src={detailedProduct?.images[0]?.imageUrl}
              alt='product-img'
              className='w-[34.375rem] h-[34.375rem] border-2'
            />
            <div className='flex flex-col ms-6'>
              <h1 className='text-2xl font-semibold mb-2'>{detailedProduct.productName}</h1>
              <RatingStar value={detailedProduct.avgRating} />
              <span className='mt-3 text-2xl font-semibold'>
                ₫ {formatNumberWithCommas(detailedProduct.price)}
              </span>
              <p className='mt-3 text-justify text-lg'>
                <span className='font-semibold'>Mô tả:</span> {detailedProduct.description}
              </p>
              <div className='flex flex-row mt-4'>
                <div className='flex items-center mt-4 gap-4'>
                  <span className='font-semibold text-lg'>Số lượng:</span>
                  <div>
                    <button
                      onClick={handleDecrement}
                      className='px-3 py-1 border rounded-l-lg bg-white hover:bg-gray-300'
                    >
                      -
                    </button>
                    <span className='px-4 py-1 border-t border-b'>{quantity}</span>
                    <button
                      onClick={handleIncrement}
                      className='px-3 py-1 border rounded-r-lg bg-white hover:bg-gray-300'
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className='flex flex-row gap-5 mt-7'>
                <Button
                  className='text-lg p-7 gap-4 rounded-xl border-amber-600 text-amber-600 hover:text-amber-600'
                  variant='outline'
                >
                  <ShoppingCart /> Thêm vào giỏ hàng
                </Button>
                <Button className='text-lg p-7 gap-4 rounded-xl' variant='destructive'>
                  Thanh toán
                </Button>
              </div>
            </div>
          </div>
          <div className='flex flex-col px-[10rem] pb-10'>
            <div className='flex flex-row justify-between items-end mb-6'>
              <h2 className='text-2xl font-bold'>Sản phẩm tương tự</h2>
              <Link to='/products'>
                <span className='flex flex-row gap-2 items-center font-medium text-orange-400'>
                  Xem thêm <MoveRight />
                </span>
              </Link>
            </div>

            <div className='flex flex-row gap-6'>
              {allProductIsLoading && <p>Loading...</p>}

              {!allProductIsLoading &&
                randomProducts &&
                randomProducts?.map(product => <ProductItem key={product._id} product={product} />)}
            </div>
          </div>
        </>
      )}
    </>
  );
}
