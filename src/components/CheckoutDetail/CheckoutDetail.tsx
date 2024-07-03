import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import CheckoutDetailCard from '../CheckoutDetailCard';
import { Button } from '../ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { toast } from '../ui/use-toast';
import { Textarea } from '../ui/textarea';

const FormSchema = z.object({
  firstName: z.string().min(1, {
    message: 'Vui lòng điền tên'
  }),
  lastName: z.string().min(1, {
    message: 'Vui lòng điền họ'
  }),
  companyName: z.string(),
  streetAddress: z.string().min(5, {
    message: 'Vui lòng điền địa chỉ'
  }),
  email: z.string().min(5, {
    message: 'Vui lòng điền địa chỉ email'
  }),
  phoneNumber: z.string().min(10, {
    message: 'Vui lòng điền số điện thoại'
  }),
  note: z.string()
});

const CheckoutDetail = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      companyName: '',
      streetAddress: '',
      email: '',
      phoneNumber: '',
      note: ''
    }
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      )
    });
  }

  return (
    <div className='flex  justify-center mt-[6rem] mb-5 gap-6'>
      <div className='flex flex-col gap-2 w-2/4'>
        <p className='font-semibold text-2xl'>Thông tin thanh toán</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='grid grid-cols-6 gap-4'>
            <FormField
              control={form.control}
              name='firstName'
              render={({ field }) => (
                <FormItem className='col-span-2'>
                  <FormLabel>Tên</FormLabel>
                  <FormControl>
                    <Input placeholder='Tên khách hàng' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='lastName'
              render={({ field }) => (
                <FormItem className='col-span-2'>
                  <FormLabel>Họ</FormLabel>
                  <FormControl>
                    <Input placeholder='Họ khách hàng' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='companyName'
              render={({ field }) => (
                <FormItem className='col-span-2'>
                  <FormLabel>
                    Tên công ty<span className='text-muted-foreground'> (Tùy chọn)</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder='Tên công ty khách hàng' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='streetAddress'
              render={({ field }) => (
                <FormItem className='col-span-6'>
                  <FormLabel>Đường</FormLabel>
                  <FormControl>
                    <Input placeholder='Địa chỉ nhận hàng' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='streetAddress'
              render={({ field }) => (
                <FormItem className='col-span-2'>
                  <FormLabel>Thành phố</FormLabel>
                  <FormControl>
                    <Input placeholder='Thành phố' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='streetAddress'
              render={({ field }) => (
                <FormItem className='col-span-2'>
                  <FormLabel>Quận</FormLabel>
                  <FormControl>
                    <Input placeholder='Quận' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='streetAddress'
              render={({ field }) => (
                <FormItem className='col-span-2'>
                  <FormLabel>Zip Code</FormLabel>
                  <FormControl>
                    <Input placeholder='Zip Code' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='col-span-3'>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='Địa chỉ email' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='phoneNumber'
              render={({ field }) => (
                <FormItem className='col-span-3'>
                  <FormLabel>Số điện thoại</FormLabel>
                  <FormControl>
                    <Input placeholder='Số điện thoại' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className='font-semibold text-2xl col-span-6'>Thông tin thêm</p>
            <FormField
              control={form.control}
              name='note'
              render={({ field }) => (
                <FormItem className='col-span-6'>
                  <FormLabel>
                    Ghi chú đơn đặt <span className='text-muted-foreground'> (Tùy chọn)</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder='Ghi chú thêm thông tin về đơn hàng, ví dụ như thời gian giao hàng,...' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
      <CheckoutDetailCard />
    </div>
  );
};

export default CheckoutDetail;
