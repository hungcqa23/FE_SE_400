import ServiceItem from 'src/components/ServiceItem';

export default function Services() {
  return (
    <div className='flex flex-row py-[2.5rem] px-[10rem] gap-20'>
      <ServiceItem
        imgSrc='/truck.svg'
        heading='Giao hàng hỏa tốc'
        description='Nhận hàng sớm nhất có thể'
      />
      <ServiceItem
        imgSrc='/customer-service.svg'
        heading='Chăm sóc khách hàng'
        description='Hỗ trợ khách hàng 24/7'
      />
      <ServiceItem
        imgSrc='/bag.svg'
        heading='Thanh toán an toàn'
        description='Nhanh chóng và bảo mật'
      />
      <ServiceItem
        imgSrc='/box.svg'
        heading='Bảo hành sản phẩm'
        description='Hoàn tiền nếu sản phẩm lỗi'
      />
    </div>
  );
}
