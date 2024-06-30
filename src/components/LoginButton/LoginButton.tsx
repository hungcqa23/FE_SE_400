import { Link } from 'react-router-dom';

export default function LoginButton() {
  return (
    <Link to='/' className='flex flex-row items-center gap-3 border-2 ps-1 pe-4 rounded-full py-1'>
      <img src='/login-button.svg' alt='login' className='w-[3rem] h-[3rem]' />
      <span className='font-semibold'>Đăng nhập</span>
    </Link>
  );
}
