import { useRoutes } from 'react-router-dom';
import RegisterLayout from 'src/layouts/RegisterLayout';
import Home from 'src/pages/Home';
import Login from 'src/pages/Login';
import ProductList from 'src/pages/ProductList';
import Register from 'src/pages/Register';

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
