import { IImage } from './image';

export interface IProduct {
  id: string;
  productName: string;
  description: string;
  price: number;
  images: IImage[];
}
// {
//   "_id": "66333368ddc65444b1edf9e2",
//   "productName": "Hạt Điều Lụa Rang Muối 500G Nguyên Hạt W240 Hũ Nhựa PET Tròn",
//   "price": 195000,
//   "viewed": 10,
//   "sold": 0,
//   "description": "Hạt điều rang muối loại 1 nguyên hạt 500g hũ nhựa tròn là một sản phẩm hạt điều ngon sử dụng loại hạt điều Bình Phước có lượng dinh dưỡng cực kỳ cao được chế biến từ hạt điều rồi rang phối trộn với muối tao nên hương vị vừa béo giòn và mặn mà cho món ăn. Hạt điều rang trộn cùng với loại muối tinh khiết đã cùng nhau để tạo nên một món ăn có hương vị vô cùng đặc biệt mà người hưởng thức khó mà quên được.",
//   "dateCreate": "2024-05-02T06:32:08.813Z",
//   "user": {
//       "_id": "6633317abae5f954393f0094",
//       "username": "a"
//   },
//   "images": [
//       {
//           "imageUrl": "https://vinanuts.com.vn/wp-content/uploads/2022/02/hat-dieu-rang-muoi-con-vo-lua-test-1500x1500-1.webp",
//       },
//   ],
//   "__v": 0,
//   "isDeleted": false,
//   "avgRating": 5
// },
export interface Product {
  _id: string;
  productName: string;
  description: string;
  price: number;
  viewed: number;
  sold: number;
  images: [
    {
      imageUrl: string;
    }
  ];
  avgRating: number;
}
