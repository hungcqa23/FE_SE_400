import { Link } from 'react-router-dom';
import RatingStar from 'src/components/RatingStar/RatingStar';

export default function ProductItem() {
  return (
    <Link
      to=''
      className='w-[19rem] h-[24rem] flex flex-col border-2 hover:border-4 hover:border-orange-400 hover:scale-105 duration-300'
    >
      <img src='/test-product.jpeg' alt='test-product' className='h-[17rem] w-[19rem] ' />
      <div className='px-3'>
        <span className='overflow-ellipsis w-full line-clamp-2 font-normal mb-2'>
          Hạt Điều Lụa Rang Muối 500G Nguyên Hạt W240 Hũ Nhựa PET Tròn
        </span>
        <span className='font-semibold mb-2'>₫ 220,000</span>
        <RatingStar value={4} />
      </div>
    </Link>
  );
}
