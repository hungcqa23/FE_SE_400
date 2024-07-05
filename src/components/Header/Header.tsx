import { useState } from 'react';
import { Link } from 'react-router-dom';
import CartButton from 'src/components/CartButton';
import LoginButton from 'src/components/LoginButton/LoginButton';
import Logo from 'src/components/Logo';
import Navigation from 'src/components/Navigation';

export default function Header() {
  const [isLoggedIn] = useState(true);

  return (
    <header>
      <div className='fixed z-50 top-0 left-0 right-0 h-[3.375rem]  px-[5rem] py-[3rem] flex flex-row items-center justify-between bg-white '>
        <div className='flex flex-row items-center'>
          <Logo />
          <Navigation />
        </div>
        <div className='flex flex-row items-center gap-5'>
          <Link to='/'>
            <img src='/search.svg' alt='search' className='w-[3rem] h-[3rem]' />
          </Link>
          {isLoggedIn ? <CartButton /> : <LoginButton />}
        </div>
      </div>
    </header>
  );
}
