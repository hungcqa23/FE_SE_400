import React from 'react';
import CheckoutDetailCard from '../CheckoutDetailCard';

const CheckoutDetail = () => {
  return (
    <div className='flex  justify-center mt-[6rem] mb-5 gap-6'>
      <div className='flex flex-col gap-2'>
        <p className='font-semibold text-2xl'>Thông tin thanh toán</p>
      </div>
      <CheckoutDetailCard />
    </div>
  );
};

export default CheckoutDetail;
