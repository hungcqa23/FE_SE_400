import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from 'src/components/ui/drawer';
import { Button } from '../ui/button';
import CartItem from '../CartItem';
import { ScrollArea } from 'src/components/ui/scroll-area';
import { Separator } from 'src/components/ui/separator';
import { Link } from 'react-router-dom';
import useCartItems from 'src/hooks/useCartItems';
import { formatCurrency } from 'src/utils/formatCurrency';

export default function CartButton() {
  const { data, error, isLoading } = useCartItems();

  const totalPrice =
    data == undefined ? 0 : data.reduce((acc, item) => acc + item?.product?.price || 0, 0);
  const totalQuantity = data == undefined ? 0 : data.length;

  return (
    <Drawer direction='right'>
      <DrawerTrigger className='flex flex-row items-center gap-3 border-2 ps-1 pe-4 rounded-full py-1'>
        <img src='/cart.svg' alt='cart' className='w-[3rem] h-[3rem]' />
        <span className='font-semibold'>Giỏ hàng ({totalQuantity})</span>
      </DrawerTrigger>

      <DrawerContent className='h-screen top-0 right-0 left-auto mt-0 w-1/4 rounded-none'>
        <DrawerHeader className='flex flex-row justify-between items-center'>
          <DrawerTitle>Giỏ hàng ({totalQuantity})</DrawerTitle>
          <DrawerClose>
            <svg
              width='25'
              height='25'
              viewBox='0 0 25 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M18.75 6.25L6.25 18.75'
                stroke='#1A1A1A'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M6.25 6.25L18.75 18.75'
                stroke='#1A1A1A'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </DrawerClose>
        </DrawerHeader>
        <ScrollArea className='h-full w-full'>
          <div className='p-4'>
            {data?.map(item => (
              <>
                <CartItem cartItem={item} onRemove={() => {}} />
                <Separator className='my-2' />
              </>
            ))}
          </div>
        </ScrollArea>
        <DrawerFooter>
          <div className='flex flex-row justify-between items-center'>
            <span className='font-normal text-base text-[#1A1A1A]'>{totalQuantity} Sản phẩm</span>
            <span className='font-semibold text-base text-[#1a1a1a]'>
              {formatCurrency(totalPrice!)}
            </span>
          </div>
          <Link to='/checkout'>
            <Button className='bg-[#00b207] w-full rounded-full'>Thanh toán</Button>
          </Link>
          <Link to='/cart'>
            <Button variant='outline' className='w-full rounded-full'>
              Đi đến giỏ hàng
            </Button>
          </Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
