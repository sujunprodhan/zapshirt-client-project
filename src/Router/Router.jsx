import { createBrowserRouter } from 'react-router';
import Roots from '../Roots/Roots';
import Home from '../Pages/Home/HeroBanner/Home';
import Services from '../Pages/Services/Services';
import About from '../Pages/About/About';
import Coverage from '../Pages/Coverage/coverage';
import Blog from '../Pages/Blog/Blog';
import Contact from '../Pages/Contact/Contact';
import Priching from '../Pages/Priching/Priching';
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
        path: '/about',
        element: <About />,
      },
      {
        path: '/coverage',
        element:<Coverage/>,
        loader: ()=> fetch('/service.json')
        .then(res => res.json())
      },
      {
        path:'/blog',
        element:<Blog/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/priching',
        element:<Priching/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      }
    ],
  },
]);
