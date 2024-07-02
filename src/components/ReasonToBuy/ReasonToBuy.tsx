import { Card, CardContent } from 'src/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from 'src/components/ui/carousel';

export default function ReasonToBuy() {
  return (
    <div className='flex flex-col items-center justify-center py-6'>
      <img src='/reason-to-buy.svg' alt='reason-to-buy' />
      <Carousel className='w-[74.625rem] cursor-grab my-5 select-none'>
        <CarouselContent>
          <CarouselItem className='basis-1/3'>
            <div className='p-1 '>
              <Card className='w-[23.875rem] h-fit drop-shadow-lg'>
                <CardContent className='flex items-center justify-center p-4 flex-col text-xl'>
                  <p className='px-5 pt-3 mb-6 text-center'>
                    <strong className='font-semibold'>
                      Chúng tôi chỉ chọn Hạt Điều cao cấp Nhất loại hạt W240 Việt Nam cho sản phẩm
                    </strong>
                    . Vì vậy khi ăn Sản phẩm của Kimmy khi ăn hạt có độ giòn rụm, béo ngậy, mùi thơm
                    đặc trưng của hạt điều.
                  </p>
                  <h4 className='mb-3 font-semibold capitalize'>Chỉ chọn hạt điều mới</h4>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className='basis-1/3'>
            <div className='p-1 '>
              <Card className='w-[23.875rem] h-fit drop-shadow-lg'>
                <CardContent className='flex items-center justify-center p-4 flex-col text-xl'>
                  <p className='px-5 pt-3 mb-6 text-center'>
                    Chúng tôi không dùng và chọn hạt điều quá to,{' '}
                    <span className='font-semibold'>
                      hạt to thường là hàng nước ngoài{' '}
                      <span className='italic'>(bở, không giòn)</span>
                    </span>{' '}
                    hoặc là hạt điều bị ngâm lâu để tăng kích thước. Thực tế hạt điều{' '}
                    <span className='font-semibold'>Việt Nam</span> không to như mọi người lầm
                    tưởng.
                  </p>
                  <h4 className='mb-3 capitalize font-semibold'>Không dùng hạt nước ngoài</h4>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className='basis-1/3'>
            <div className='p-1 '>
              <Card className='w-[23.875rem] h-fit drop-shadow-lg'>
                <CardContent className='flex items-center justify-center p-4 flex-col text-xl'>
                  <p className='px-5 pt-3 mb-6 text-center'>
                    <span className='font-semibold'>Hạt điều tại Cashewix</span> được{' '}
                    <span className='font-semibold'>lựa chọn kỹ lưỡng</span> với hạt điều còn nguyên
                    vẹn, kích cỡ hạt đồng nhất, hạt dễ bóc vỏ lụa,{' '}
                    <span className='font-semibold'>luôn rang hạt điều mới</span> nên khi ăn không
                    có hôi mùi dầu,{' '}
                    <span className='font-semibold'>hạt điều chất lượng loại 1</span>.{' '}
                  </p>
                  <h4 className='mb-3 capitalize font-semibold'>Chất lượng đảm bảo</h4>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className='basis-1/3'>
            <div className='p-1 '>
              <Card className='w-[23.875rem] h-fit drop-shadow-lg'>
                <CardContent className='flex items-center justify-center p-4 flex-col text-xl'>
                  <p className='px-5 pt-3 mb-6 text-center'>
                    <span className='font-semibold'>Hạt điều Cashewix</span> có{' '}
                    <span className='font-semibold'>
                      nguồn gốc rõ ràng, có thương hiệu, có công ty chủ quản
                    </span>{' '}
                    uy tín đảm bảo chất lượng. Được đảm bảo vệ sinh và đăng ký theo quy định của nhà
                    nước.
                  </p>
                  <h4 className='mb-3 capitalize font-semibold'>Nguồn gốc rõ ràng</h4>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className='basis-1/3'>
            <div className='p-1 '>
              <Card className='w-[23.875rem] h-fit drop-shadow-lg'>
                <CardContent className='flex items-center justify-center p-4 flex-col text-xl'>
                  <p className='px-5 pt-3 mb-6 text-center'>
                    Sản phẩm hạt điều của <span className='font-semibold'>Cashewix</span> đảm bảo
                    hợp vệ sinh nhờ{' '}
                    <span className='font-semibold'>quy trình sản xuất và đóng gói khép kín</span>,
                    đảm bảo độ ngon của hạt.{' '}
                  </p>
                  <h4 className='mb-3 capitalize font-semibold'>Sản xuất hợp vệ sinh</h4>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <img src='/cashew-sizes.webp' alt='cashew-sizes' className='my-5 w-[74.625rem]' />
    </div>
  );
}
