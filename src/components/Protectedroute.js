import React from 'react'
import { Navigate } from 'react-router-dom';

const Protectedroute = ({children}) => {
   let auth=false;
   if (!auth){
    return  <Navigate to="/"/>
   }
   return children;
}

export default Protectedroute