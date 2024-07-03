import React from 'react';
import { Button } from '../ui/button';

interface CartItemProps {
  // name: string;
  // price: number;
  // imageUrl: string;
  onRemove: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ onRemove }) => {
  return (
    <div className='flex flex-row items-center justify-between'>
      <div className='flex flex-row items-center gap-2'>
        <img src='/bowl-cashew.png' alt='product' className='w-28 h-28' />
        <div className='flex flex-col justify-start'>
          <span className='font-normal text-base text-[#1A1A1A]'>Hạt điều rang muối</span>
          <span className='font-normal text-base text-[#808080]'>1 x $13</span>
        </div>
      </div>
      <Button variant='ghost' className='rounded-full py-0 px-2' onClick={onRemove}>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_121_1337)'>
            <path
              d='M12 23C18.0748 23 23 18.0748 23 12C23 5.92525 18.0748 1 12 1C5.92525 1 1 5.92525 1 12C1 18.0748 5.92525 23 12 23Z'
              stroke='#CCCCCC'
              strokeMiterlimit='10'
            />
            <path
              d='M16 8L8 16'
              stroke='#666666'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M16 16L8 8'
              stroke='#666666'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <defs>
            <clipPath id='clip0_121_1337'>
              <rect width='24' height='24' fill='white' />
            </clipPath>
          </defs>
        </svg>
      </Button>
    </div>
  );
};

export default CartItem;
