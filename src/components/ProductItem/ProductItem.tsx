import { Link } from 'react-router-dom';
import RatingStar from 'src/components/RatingStar/RatingStar';
import { formatNumberWithCommas } from 'src/lib/utils';
import { Product } from 'src/types/product';

export default function ProductItem({ product }: { product: Product }) {
  return (
    <Link
      to={`/products/${product._id}`}
      className='w-[18.2rem] h-[25rem] min-w-[17.2rem] min-h-[25rem] flex flex-col border-2 hover:border-4 hover:border-orange-400 hover:scale-105 duration-300'
    >
      <img src={product?.images[0]?.imageUrl} alt='test-product' className='h-[17rem] w-[19rem] ' />
      <div className='px-3'>
        <span className='overflow-ellipsis w-full line-clamp-2 font-normal mb-2'>
          {product?.productName}
        </span>
        <span className='font-semibold mb-2'>₫ {formatNumberWithCommas(product?.price)}</span>
        <RatingStar value={product?.avgRating} />
      </div>
    </Link>
  );
}
