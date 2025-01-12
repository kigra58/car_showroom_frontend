import React from 'react';
import { Outlet,Navigate, BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from './routes';

import Login from '../views/Auth/Login';
import NotFound from '../views/NotFound/NotFound';
import Home from '../views/User/Home';


interface IProps{
  // data:IAuthUser
  isLogin:boolean
}
 
const PublicRoutes:React.FC=()=>{
  //   const authUser= useSelector((val:{[authSlice.name]:IAuthUser})=>
  //       val && val[authSlice.name]);

  // console.log("authUserauthUser",authUser)  

  const isLogin=false;

  return (
    <BrowserRouter>
    {/* <Navbar /> */}
    <Routes>
      <Route path={ROUTES.AUTH_ROUTES.LOGIN}  element={isLogin  ?  
      <Navigate to={ROUTES.USER.HOME} /> :<Login/>}></Route> 
       <Route path={ROUTES.ADMIN.USER_LIST} element={<UserList />}></Route> 
      

      <Route element={<ProtectedRoute isLogin={isLogin} />}>
        <Route path={ROUTES.USER.HOME} element={<Home />}></Route>
        <Route path={ROUTES.NOT_FOUND.NOT_FOUND} element={<NotFound />}></Route>           
        

         {/* ADMIN ROUTE            */}
      </Route>
    </Routes>
  </BrowserRouter>
  )

};

const ProtectedRoute:React.FC<IProps> = ({isLogin}) => 
    isLogin ?<Outlet/>:<Navigate to={ROUTES.AUTH_ROUTES.LOGIN} />
 
export default PublicRoutes;