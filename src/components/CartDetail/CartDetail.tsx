import React from 'react';
import Cart from 'src/pages/Cart';
import CartDataTable from '../CartDataTable';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const CartDetail = () => {
  return (
    <div className='w-full flex flex-col items-center gap-8 mt-[6rem] mb-5'>
      <p className='text-3xl font-semibold text-[#1a1a1a]'>Giỏ hàng của tôi</p>
      <div className='flex gap-6 items-start'>
        <CartDataTable />
        <Card className='w-[480px]'>
          <CardHeader>
            <CardTitle className='text-xl'>Tổng giá trị giỏ hàng</CardTitle>
          </CardHeader>
          <CardContent className='flex flex-col gap-4'>
            <div className='flex justify-between'>
              <p className='text-sm text-muted-foreground'>Tổng tiền hàng: </p>
              <p className='text-sm font-medium '>$26</p>
            </div>
            <div className='flex justify-between'>
              <p className='text-sm text-muted-foreground'>Phí ship: </p>
              <p className='text-sm font-medium '>0</p>
            </div>
            <div className='flex justify-between'>
              <p className='text-base text-muted-foreground'>Tổng thanh toán: </p>
              <p className='text-base font-medium '>$26</p>
            </div>
          </CardContent>
          <CardFooter>
            <Link to='/checkout' className='w-full'>
              <Button className='w-full bg-[#00b207] rounded-full'>Thanh toán</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CartDetail;
