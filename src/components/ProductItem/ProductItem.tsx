import { Link } from 'react-router-dom';
import RatingStar from 'src/components/RatingStar/RatingStar';
import { formatNumberWithCommas } from 'src/lib/utils';

export interface ProductItemProps {
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
}

export default function ProductItem({ product }: { product: ProductItemProps }) {
  return (
    <Link
      to='/product'
      className='w-[17.2rem] h-[25rem] min-w-[17.2rem] min-h-[25rem] flex flex-col border-2 hover:border-4 hover:border-orange-400 hover:scale-105 duration-300'
    >
      <img src={product.imageUrl} alt='test-product' className='h-[17rem] w-[19rem] ' />
      <div className='px-3'>
        <span className='overflow-ellipsis w-full line-clamp-2 font-normal mb-2'>
          {product.name}
        </span>
        <span className='font-semibold mb-2'>₫ {formatNumberWithCommas(product.price)}</span>
        <RatingStar value={product.rating} />
      </div>
    </Link>
  );
}
