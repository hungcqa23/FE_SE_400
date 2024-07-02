import Logo from 'src/components/Logo';
import { Separator } from 'src/components/ui/separator';

export default function Footer() {
  return (
    <div className='h-fit flex flex-col justify-start items-center mt-10'>
      <div className='flex flex-row justify-start gap-10 mb-10 -translate-x-6'>
        <div className='flex flex-col items-end'>
          <h2 className='text-2xl uppercase mb-2 font-semibold'>Liên hệ chúng tôi</h2>
          <h3 className='font-semibold mt-5'>Email</h3>
          <p>hotrocashewix@gmail.com</p>
          <h3 className='font-semibold mt-5'>SĐT</h3>
          <p>0254 666 888</p>
          <h3 className='font-semibold mt-5'>Địa chỉ</h3>
          <p>Xã Nghĩa Bình, Huyện Bù Đăng, Bình Phước</p>
        </div>
        <Separator orientation='vertical' />
        <div className='px-10 flex flex-col  items-center'>
          <Logo />
          <p className='text-center mt-3 mb-8'>
            Một thương hiệu nông sản của người Việt Nam với ước mơ
            <br />
            hướng đến một nền nông nghiệp hiện đại
          </p>
          <div className='flex flex-row gap-4'>
            <img src='/instagram.svg' alt='instagram' className='cursor-pointer' />
            <img src='/facebook.svg' alt='facebook' className='cursor-pointer' />
          </div>
        </div>
        <Separator orientation='vertical' />
        <div className='flex flex-col items-start'>
          <h2 className='text-2xl mb-7 font-semibold uppercase'>Thông tin chung</h2>
          <p className='mb-2 cursor-pointer'>Giới thiệu</p>
          <p className='mb-2 cursor-pointer'>Thông tin liên hệ</p>
          <p className='mb-2 cursor-pointer'>Nhận gia công hạt điều</p>
          <p className='mb-2 cursor-pointer'>Chính sách bảo mật</p>
          <p className='mb-2 cursor-pointer'>Chính sách thanh toán</p>
          <p className='mb-2 cursor-pointer'>Chính sách hoàn trả hàng</p>
        </div>
      </div>
      <Separator />
      <span className='my-2'>Copyright © Cashewix - NÂNG TẦM GIÁ TRỊ NÔNG SẢN VIỆT NAM</span>
    </div>
  );
}
