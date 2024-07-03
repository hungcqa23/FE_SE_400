import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from 'src/components/ui/drawer';
import { Button } from '../ui/button';

export default function Cart() {
  return (
    <Drawer direction='right'>
      <DrawerTrigger className='flex flex-row items-center gap-3 border-2 ps-1 pe-4 rounded-full py-1'>
        <img src='/cart.svg' alt='cart' className='w-[3rem] h-[3rem]' />
        <span className='font-semibold'>Giỏ hàng (0)</span>
      </DrawerTrigger>
      <DrawerContent className='h-screen top-0 right-0 left-auto mt-0 w-1/4 rounded-none'>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant='outline'>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
