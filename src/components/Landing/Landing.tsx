import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <>
      <div className='h-[37rem] mt-[6.375rem] flex flex-row justify-between overflow-hidden bg-nut '>
        <div className='mt-[7rem] ms-[13rem] flex flex-col z-10 items-start'>
          <img src='/pure-nature.svg' alt='100percent' />
          <p className='mt-3 text-5xl tracking-normal leading-tight font-bold text-orange-900 '>
            Your favorite nuts <br />
            is now ready to
          </p>
          <span className='mt-6 mb-10 text-6xl tracking-wider text-orange-600'>
            <em className='not-italic font-bold'>#GRAB</em>AND
            <em className='not-italic font-bold'>GO!</em>
          </span>
          <Link to='/products'>
            <button className='px-5 py-5 text-xl font-medium  rounded-2xl bg-orange-300 text-orange-900  flex flex-row items-center gap-2'>
              Explore Now
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-shopping-cart mt-1'
              >
                <circle cx='8' cy='21' r='1' />
                <circle cx='19' cy='21' r='1' />
                <path d='M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12' />
              </svg>
            </button>
          </Link>
        </div>
        <img
          src='/hero.png'
          alt='hero'
          className='w-[50rem] h-[50rem] -mt-[3rem] drop-shadow-2xl '
        />
      </div>
    </>
  );
}
