import { MoveRight, ShoppingCart } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductItem from 'src/components/ProductItem';
import RatingStar from 'src/components/RatingStar/RatingStar';
import { Button } from 'src/components/ui/button';
import { formatNumberWithCommas } from 'src/lib/utils';

const sampleProduct = {
  name: 'Hạt Điều Lụa Rang Muối 500G Nguyên Hạt W240 Hũ Nhựa PET Tròn',
  price: 299000,
  imageUrl: '/test-product.jpeg',
  description:
    'Hạt điều rang muối loại 1 nguyên hạt 500g hũ nhựa tròn là một sản phẩm hạt điều ngon sử dụng loại hạt điều Bình Phước có lượng dinh dưỡng cực kỳ cao được chế biến từ hạt điều rồi rang phối trộn với muối tao nên hương vị vừa béo giòn và mặn mà cho món ăn. Hạt điều rang trộn cùng với loại muối tinh khiết đã cùng nhau để tạo nên một món ăn có hương vị vô cùng đặc biệt mà người hưởng thức khó mà quên được.',
  rating: 4
};

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };
  return (
    <>
      <div className='mt-[6rem] mb-5 flex flex-row px-[10rem] py-[4rem]'>
        <img
          src={sampleProduct.imageUrl}
          alt='product-img'
          className='w-[34.375rem] h-[34.375rem] border-2'
        />
        <div className='flex flex-col ms-6'>
          <h1 className='text-2xl font-semibold mb-2'>{sampleProduct.name}</h1>
          <RatingStar value={sampleProduct.rating} />
          <span className='mt-3 text-2xl font-semibold'>
            ₫ {formatNumberWithCommas(sampleProduct.price)}
          </span>
          <p className='mt-3 text-justify text-lg'>
            <span className='font-semibold'>Mô tả:</span> {sampleProduct.description}
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
          <ProductItem product={sampleProduct} />
          <ProductItem product={sampleProduct} />
          <ProductItem product={sampleProduct} />
          <ProductItem product={sampleProduct} />
        </div>
      </div>
    </>
  );
}
