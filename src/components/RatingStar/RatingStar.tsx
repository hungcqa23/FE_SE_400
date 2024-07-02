import React from 'react';

interface RatingStarProps {
  value: number;
}

const RatingStar: React.FC<RatingStarProps> = ({ value }) => {
  const normalizedValue = Math.max(0, Math.min(5, value));

  const stars = Array.from({ length: 5 }, (_, index) => (
    <svg
      key={index}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='19'
      height='19'
      fill={index < normalizedValue ? '#EABE12' : 'grey'}
    >
      <path d='M12 .587l3.668 7.568L24 9.423l-6 5.847 1.416 8.292L12 18.897l-7.416 3.865L6 15.27 0 9.423l8.332-1.268z' />
    </svg>
  ));

  return <div className='flex mt-2 '>{stars}</div>;
};

export default RatingStar;
