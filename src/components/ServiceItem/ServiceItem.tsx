interface ServiceItemProps {
  imgSrc: string;
  heading: string;
  description: string;
}

export default function ServiceItem({ imgSrc, heading, description }: ServiceItemProps) {
  return (
    <div className='flex flex-row items-center'>
      <img src={imgSrc} alt='truck' className='h-[2.5rem] w-[2.5rem]' />
      <div className='flex flex-col ms-3'>
        <span className='font-medium'>{heading}</span>
        <p className='mt-1 text-gray-400'>{description}</p>
      </div>
    </div>
  );
}
