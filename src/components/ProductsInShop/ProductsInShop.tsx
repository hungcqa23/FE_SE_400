import React from 'react';
import ProductItem from 'src/components/ProductItem';

const products = [
  {
    name: 'Hạt Điều Lụa Rang Muối 500G Nguyên Hạt W240 Hũ Nhựa PET Tròn',
    price: 299000,
    imageUrl: '/test-product.jpeg',
    description:
      'Hạt điều rang muối loại 1 nguyên hạt 500g hũ nhựa tròn là một sản phẩm hạt điều ngon sử dụng loại hạt điều Bình Phước có lượng dinh dưỡng cực kỳ cao được chế biến từ hạt điều rồi rang phối trộn với muối tao nên hương vị vừa béo giòn và mặn mà cho món ăn. Hạt điều rang trộn cùng với loại muối tinh khiết đã cùng nhau để tạo nên một món ăn có hương vị vô cùng đặc biệt mà người hưởng thức khó mà quên được.',
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
