import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className='flex flex-row gap-10 ms-32 text-lg font-semibold'>
      <Link to='/'>Trang chủ</Link>
      <Link to='/'>Sản phẩm</Link>
      <Link to='/'>Về chúng tôi</Link>
    </nav>
  );
}
