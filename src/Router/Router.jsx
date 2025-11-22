import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home/HeroBanner/Home';
import Services from '../Pages/Services/Services';
import Roots from '../Roots/Roots';
import Coverage from '../Pages/Coverage/Coverage';
import AuthLayout from '../Roots/AuthLayout';
import Login from '../Layoute/Login';
import Register from '../Layoute/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Roots />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/coverage',
        element: <Coverage />,
        loader: () => fetch('/service.json').then((res) => res.json()),
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);
