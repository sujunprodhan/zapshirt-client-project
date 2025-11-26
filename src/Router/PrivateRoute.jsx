import Loading from './Loading';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';


const PrivateRoute = ({children}) => {
 
  const {user, loading} = useAuth()
  const location = useLocation()
  if(loading){
   return <Loading/>
  }
  if(!user){
   return <Navigate to='/login' state={location.pathname}/>
  }
  return children
};

export default PrivateRoute;