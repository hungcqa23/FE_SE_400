import { MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductItem from 'src/components/ProductItem';

export default function OutProduct() {
  return (
    <div className='flex flex-col px-[10rem] pb-10'>
      <div className='flex flex-row justify-between items-end mb-6'>
        <h2 className='text-2xl font-bold'>Sản phẩm nổi bật</h2>
        <Link to=''>
          <span className='flex flex-row gap-2 items-center font-medium text-orange-400'>
            Xem thêm <MoveRight />
          </span>
        </Link>
      </div>
      <div className='flex flex-row gap-6'>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
}
