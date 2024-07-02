export default function ChooseCashew() {
  return (
    <div className='pt-4 pb-10 flex flex-col justify-center items-center'>
      <img src='/choose-cashew-text.svg' alt='choose-cashew' className='mb-12' />
      <div className='flex flex-row'>
        <div className='flex flex-col w-[24.438rem] text-end gap-8 mt-20'>
          <div>
            <h3 className='text-2xl text-amber-600 font-bold uppercase mb-2'>
              Chọn hạt còn nguyên vẹn
            </h3>
            <p className='text-xl'>
              Trong phân loại quốc tế, Hạt điều thì{' '}
              <span className='italic font-semibold'>
                hạt còn nguyên vẹn, không bị vỡ, không bị teo,...
              </span>{' '}
              thì chúng có chất lượng cao.
            </p>
          </div>
          <div>
            <h3 className='text-2xl text-amber-600 font-bold uppercase mb-2'>
              Chọn hạt điều không <br /> nhiễm dầu
            </h3>
            <p className='text-xl'>
              Hạt điều nhiễm dầu là hạt khi ăn hạt chúng ta có{' '}
              <span className='font-semibold'>cảm thấy bị tê lưỡi</span>. Đây là loại Hạt kém chất
              lượng, <span className='font-semibold'>ăn có hại cần bị loại bỏ</span>.
            </p>
          </div>
          <div>
            <h3 className='text-2xl text-amber-600 font-bold uppercase mb-2'>
              Chọn màu sắc của <br /> hạt đồng đều
            </h3>
            <p className='text-xl'>
              Màu sắc của nhân điều trước khi rang{' '}
              <span className='font-semibold'>có màu đồng điều</span>, là loại hạt có màu trắng,
              trắng ngà, tro nhạt có nghĩa <span className='font-semibold'>chất lượng tốt</span>.
            </p>
          </div>
        </div>
        <img src='/bowl-cashew.png' alt='bowl-cashew' className='w-[31.25rem] h-[31.25rem]' />
        <div className='flex flex-col w-[24.438rem] gap-8'>
          <div>
            <h3 className='text-2xl text-amber-600 font-bold uppercase mb-2'>
              Chọn hạt điều xuất xứ
              <br /> Việt Nam
            </h3>
            <p className='text-xl'>
              <span className='font-semibold'>Hạt Điều nguồn gốc Việt Nam</span> được nhân xét là
              <span className='font-semibold'> NGON hơn</span> so với hạt nước ngoài.{' '}
              <span className='font-semibold'>Hạt Điều Bình Phước</span> được đánh giá là loại hạt
              điều ngon bật nhất trên thế giới vì hạt sau khi rang:{' '}
              <span className='font-semibold italic'>
                giòn, hương thơm đặc trưng hòa với vị béo ngậy, dễ bóc vỏ lụa
              </span>
              .
            </p>
          </div>
          <div>
            <h3 className='text-2xl text-amber-600 font-bold uppercase mb-2'>
              Chọn hạt điều size lớn
            </h3>
            <p className='text-xl'>
              <span className='font-semibold'>Hạt Điều càng to</span>, càng nguyên vẹn thì chứng tỏ
              <span className='font-semibold'> cây điều đó được chăm sóc tốt</span> nên dưỡng chất
              của chúng là nhiều hơn so với hạt nhỏ.
            </p>
          </div>
          <div>
            <h3 className='text-2xl text-amber-600 font-bold uppercase mb-2'>
              Chọn sản phẩm đóng gói chắc chắn
            </h3>
            <p className='text-xl'>
              Chọn những sản phẩm hạt điều được đóng gói chắc chắn.{' '}
              <span className='font-semibold'>Hạt điều</span> sẽ dần{' '}
              <span className='font-semibold'>mất đi độ giòn</span>, hương vị,... nếu cách{' '}
              <span className='font-semibold'>đóng gói không được tốt</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
