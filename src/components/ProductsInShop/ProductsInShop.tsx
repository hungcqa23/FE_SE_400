import React from 'react';
import ProductItem from 'src/components/ProductItem';

const products = [
  {
    name: 'Hạt Điều Lụa Rang Muối 500G Nguyên Hạt W240 Hũ Nhựa PET Tròn',
    price: 299000,
    imageUrl: '/test-product.jpeg',
    rating: 4
  },
  {
    name: 'Hạt Điều Lụa Rang Muối 500G Nguyên Hạt W240 Hũ Nhựa PET Tròn',
    price: 299000,
    imageUrl: '/test-product.jpeg',
    rating: 4
  },
  {
    name: 'Hạt Điều Lụa Rang Muối 500G Nguyên Hạt W240 Hũ Nhựa PET Tròn',
    price: 299000,
    imageUrl: '/test-product.jpeg',
    rating: 4
  },
  {
    name: 'Hạt Điều Lụa Rang Muối 500G Nguyên Hạt W240 Hũ Nhựa PET Tròn',
    price: 299000,
    imageUrl: '/test-product.jpeg',
    rating: 4
  },
  {
    name: 'Hạt Điều Lụa Rang Muối 500G Nguyên Hạt W240 Hũ Nhựa PET Tròn',
    price: 299000,
    imageUrl: '/test-product.jpeg',
    rating: 4
  },
  {
    name: 'Hạt Điều Lụa Rang Muối 500G Nguyên Hạt W240 Hũ Nhựa PET Tròn',
    price: 299000,
    imageUrl: '/test-product.jpeg',
    rating: 4
  },
  {
    name: 'Hạt Điều Lụa Rang Muối 500G Nguyên Hạt W240 Hũ Nhựa PET Tròn',
    price: 299000,
    imageUrl: '/test-product.jpeg',
    rating: 4
  },
  {
    name: 'Hạt Điều Lụa Rang Muối 500G Nguyên Hạt W240 Hũ Nhựa PET Tròn',
    price: 299000,
    imageUrl: '/test-product.jpeg',
    rating: 4
  },
  {
    name: 'Hạt Điều Lụa Rang Muối 500G Nguyên Hạt W240 Hũ Nhựa PET Tròn',
    price: 299000,
    imageUrl: '/test-product.jpeg',
    rating: 4
  },
  {
    name: 'Hạt Điều Lụa Rang Muối 500G Nguyên Hạt W240 Hũ Nhựa PET Tròn',
    price: 299000,
    imageUrl: '/test-product.jpeg',
    rating: 4
  }
  // Add more products here
];

export default function ProductsInShop() {
  return (
    <div className=' px-[10rem] pt-10 pb-16'>
      <div className='grid grid-cols-4 gap-6'>
        {products.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
