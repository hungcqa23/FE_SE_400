import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className='flex flex-row gap-10 ms-32 text-lg font-semibold'>
      <Link to='/'>Home</Link>
      <Link to='/'>Product</Link>
      <Link to='/'>About Us</Link>
    </nav>
  );
}
