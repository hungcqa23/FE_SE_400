import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';

const cartItems = [
  {
    id: 'm5gr84i9',
    name: 'Hạt điều rang muối',
    quantity: 2,
    price: 13,
    image: '/bowl-cashew.png'
  },
  {
    id: 'm5gr84i9',
    name: 'Hạt điều rang muối',
    quantity: 2,
    price: 14,
    image: '/bowl-cashew.png'
  },
  {
    id: 'm5gr84i9',
    name: 'Hạt điều rang muối',
    quantity: 2,
    price: 15,
    image: '/bowl-cashew.png'
  },
  {
    id: 'm5gr84i9',
    name: 'Hạt điều rang muối',
    quantity: 2,
    price: 16,
    image: '/bowl-cashew.png'
  }
];

interface CheckoutDetailCardProps {
  onSubmit: (data: any) => void;
}

const CheckoutDetailCard: React.FC<CheckoutDetailCardProps> = ({ onSubmit }) => {
  return (
    <Card className='w-[420px]'>
      <CardHeader>
        <CardTitle className='text-xl'>Đơn hàng</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col gap-4'>
        {cartItems.map(item => (
          <div key={item.id} className='flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
              <img className='w-14 h-14' src={item.image} alt='product-image' />
              <p className='text-sm text-[#1a1a1a]'>
                {item.name} x{item.quantity}
              </p>
            </div>
            <p className='text-sm font-medium '>${item.price * item.quantity}</p>
          </div>
        ))}
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
        <CardTitle className='text-xl'>Phương thức thanh toán</CardTitle>
        <RadioGroup defaultValue='cod'>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='cod' id='r1' />
            <Label htmlFor='r1'>Thanh toán khi nhận hàng</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='zalo' id='r2' />
            <Label htmlFor='r2'>Zalopay</Label>
          </div>
        </RadioGroup>
      </CardContent>
      <CardFooter>
        <Link to='/checkout' className='w-full'>
          <Button
            onClick={onSubmit}
            form='billing-form'
            type='submit'
            className='w-full bg-[#00b207] rounded-full'
          >
            Đặt hàng
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CheckoutDetailCard;
