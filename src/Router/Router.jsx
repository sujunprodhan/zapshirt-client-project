import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home/HeroBanner/Home';
import Services from '../Pages/Services/Services';
import Roots from '../Roots/Roots';
import Coverage from '../Pages/Coverage/Coverage';
import AuthLayout from '../Roots/AuthLayout';
import Login from '../Layoute/Login';
import Register from '../Layoute/Register';
import Rider from '../Pages/Rider/Rider';
import PrivateRoute from './PrivateRoute';
import SendAParcel from '../Pages/SendAparcel/SendAParcel';
import DashBoardLayout from '../Pages/DashBoardLayout/DashBoardLayout';
import MyParcels from '../Pages/Coverage/DashBoard/MyParcels';
import Payment from '../Pages/DashBoardLayout/Payment/Payment';
import PaymentSuccess from '../Pages/DashBoardLayout/Payment/PaymentSuccess';
import PaymentCancel from '../Pages/DashBoardLayout/Payment/PaymentCancel';
import PaymentHistory from '../Pages/DashBoardLayout/PaymentHistory/PaymentHistory';

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
        path: '/rider',
        element: (
          <PrivateRoute>
            <Rider></Rider>
          </PrivateRoute>
        ),
      },
      {
        path: '/sendapercel',
        element: (
          <PrivateRoute>
            <SendAParcel />
          </PrivateRoute>
        ),
        loader: () => fetch('/service.json').then((res) => res.json()),
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
  {
    path: '/dashboardlayout',
    element: (
      <PrivateRoute>
        <DashBoardLayout></DashBoardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: 'myparcels',
        element: <MyParcels></MyParcels>,
      },
      {
        path: 'payment/:parcelId',
        element: <Payment></Payment>,
      },
      {
        path:'payment-success',
        element:<PaymentSuccess/>
      },
      {
        path:'paymenthistory',
        element:<PaymentHistory/>
      },
      {
        path:'payment-cancel',
        element:<PaymentCancel/>
      }
    ],
  },
]);
