import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to='/' className='w-fit h-[3.375rem] flex flex-row justify-center gap-4 items-center '>
      <img src='/cashew.png' alt='cashew' className='w-[3.375rem] h-[3.375rem]' />
      <span className='text-xl font-bold text-emerald-900'>Cashewix</span>
    </Link>
  );
}
