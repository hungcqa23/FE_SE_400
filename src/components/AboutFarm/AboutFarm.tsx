export default function AboutFarm() {
  return (
    <div className='flex flex-row py-12 justify-between items-center'>
      <img
        src='growing-cashews.jpg'
        alt='farm'
        className='w-[48rem] transform scale-x-[-1] -translate-x-2'
      />
      <div className='w-[50.563rem] h-[26.875rem] bg-white rounded-3xl z-10 -translate-x-20 py-8 px-10 text-justify'>
        <img src='/quality-cashew.svg' alt='quality-cashew' className='select-none h-[2rem]' />
        <h2 className='mt-3 text-amber-600 text-3xl font-bold mb-3'>
          CASHEWIX là nơi cung cấp hạt điều chất lượng
        </h2>
        <p className='text-xl mb-3'>
          <span className='font-semibold'>
            Cashewix là xưởng sản xuất hạt điều chuyên cung cấp:{' '}
            <span className='text-amber-600'>
              hạt điều rang muối, hạt điều rang bơ, hạt điều vỏ lụa rang muối, hạt điều nhân sống,
              hạt điều bể...
            </span>{' '}
          </span>{' '}
          Với nguồn nguyên liệu là hạt điều của vùng đất bazan{' '}
          <em className='not-italic font-semibold'>Bình Phước</em>, cho ra hạt điều có giá trị dinh
          dưỡng cao nổi tiếng khắp thế giới.
        </p>

        <p className='text-xl'>
          Quy trình chế biến sản xuất hạt điều tại{' '}
          <span className='font-semibold'>Cashewix được đồng bộ và kiểm soát chặt chẽ</span> từ hạt
          điều thô đến tách nhân điều. Hạt điều được phân loại, kiểm tra một lần nữa trước khi đưa
          vào chế biến bằng <span className='font-semibold'>phương pháp rang hiện đại</span>, quy
          trình đóng gói khép kín. Vì vậy,{' '}
          <span className='font-semibold'>
            Cashewix chính là địa chỉ mua hạt điều uy tín chất lượng
          </span>
          .
        </p>
      </div>
    </div>
  );
}
