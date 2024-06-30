import { Link } from 'react-router-dom';

export default function Cart() {
  return (
    <Link to='/' className='flex flex-row items-center gap-3 border-2 ps-1 pe-4 rounded-full py-1'>
      <img src='/cart.svg' alt='cart' className='w-[3rem] h-[3rem]' />
      <span className='font-semibold'>Giỏ hàng (0)</span>
    </Link>
  );
}
