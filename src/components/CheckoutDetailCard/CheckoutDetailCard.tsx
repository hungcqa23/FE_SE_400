import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';
import { ICartItem } from 'src/types/cartItem';
import { formatCurrency } from 'src/utils/formatCurrency';

interface CheckoutDetailCardProps {
  cartItems: ICartItem[];
  onSubmit: (data: any) => void;
}

const CheckoutDetailCard: React.FC<CheckoutDetailCardProps> = ({ cartItems, onSubmit }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.product.price, 0);

  return (
    <Card className='w-[420px]'>
      <CardHeader>
        <CardTitle className='text-xl'>Đơn hàng</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col gap-4'>
        {cartItems.map(item => (
          <div key={item.id} className='flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
              <img
                className='w-14 h-14'
                src={item.product.images[0].imageUrl}
                alt='product-image'
              />
              <p className='text-sm text-[#1a1a1a]'>
                {item.product.productName} x{item.quantity}
              </p>
            </div>
            <p className='text-sm font-medium '>
              {formatCurrency(item.product.price * item.quantity)}
            </p>
          </div>
        ))}
        <div className='flex justify-between'>
          <p className='text-sm text-muted-foreground'>Tổng tiền hàng: </p>
          <p className='text-sm font-medium '>{formatCurrency(totalPrice)}</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-sm text-muted-foreground'>Phí ship: </p>
          <p className='text-sm font-medium '>0</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-base text-muted-foreground'>Tổng thanh toán: </p>
          <p className='text-base font-medium '>{formatCurrency(totalPrice)}</p>
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
