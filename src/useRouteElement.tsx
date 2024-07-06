import { useRoutes } from 'react-router-dom';
import RegisterLayout from 'src/layouts/RegisterLayout';
import Home from 'src/pages/Home';
import Login from 'src/pages/Login';
import Product from 'src/pages/Product';
import ProductList from 'src/pages/ProductList';
import Register from 'src/pages/Register';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/products',
      element: <ProductList />
    },
    {
      path: '/products/:id',
      element: <Product />
    },
    {
      path: '/cart',
      element: <Cart />
    },
    {
      path: '/checkout',
      element: <Checkout />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    }
  ]);
  return routeElement;
}
