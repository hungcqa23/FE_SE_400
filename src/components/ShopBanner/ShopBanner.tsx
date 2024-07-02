export default function ShopBanner() {
  return (
    <div className='flex flex-row justify-center mt-[6rem] gap-56 border-b-2 h-[12.5rem]'>
      <img src='banner1.webp' alt='cashew-bowl' className='-translate-y-3 -z-10' />
      <div className='flex flex-col items-center gap-3 mt-16'>
        <h1 className='text-3xl font-semibold  capitalize'>Cửa hàng</h1>
        <span>10 sản phẩm</span>
      </div>
      <img src='banner2.jpg' alt='cashew' className='' />
    </div>
  );
}
