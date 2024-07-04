import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import CheckoutDetailCard from '../CheckoutDetailCard';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { toast } from '../ui/use-toast';
import { Textarea } from '../ui/textarea';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

const cities = [
  {
    value: 'ho-chi-minh',
    label: 'Hồ Chí Minh'
  },
  {
    value: 'ha-noi',
    label: 'Hà Nội'
  },
  {
    value: 'da-nang',
    label: 'Đà Nẵng'
  },
  {
    value: 'hai-phong',
    label: 'Hải Phòng'
  },
  {
    value: 'can-tho',
    label: 'Cần Thơ'
  }
];

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
  city: z.string({
    required_error: 'Vui lòng chọn thành phố'
  }),
  district: z.string({
    required_error: 'Vui lòng chọn quận'
  }),
  zipCode: z.string(),
  email: z.string().email({
    message: 'Vui lòng điền địa chỉ email hợp lệ'
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
      zipCode: '',
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
          <form
            id='billing-form'
            onSubmit={form.handleSubmit(onSubmit)}
            className='grid grid-cols-6 gap-4'
          >
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
              name='city'
              render={({ field }) => (
                <FormItem className='col-span-2'>
                  <FormLabel>Thành phố</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Chọn thành phố' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {cities.map(city => (
                        <SelectItem key={city.value} value={city.value}>
                          {city.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='district'
              render={({ field }) => (
                <FormItem className='col-span-2'>
                  <FormLabel>Quận</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Chọn quận' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {cities.map(city => (
                        <SelectItem key={city.value} value={city.value}>
                          {city.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='zipCode'
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
      <CheckoutDetailCard onSubmit={form.handleSubmit(onSubmit)} />
    </div>
  );
};

export default CheckoutDetail;
