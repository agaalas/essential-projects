import React, { useState } from "react";
import Login from "./routes/login/login";
import SignUp from "./routes/sign-up/sign-up";
import Movies from "./movies/movies";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./routes/home";

const protectedRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

const accessibleRouter = createBrowserRouter([
  {
    path:"/login",
    element:<Login/>
  }
]);

function Router(){
  const [logged,setLogged]=useState(false)
  return(
    <RouterProvider router={logged?protectedRouter:accessibleRouter}/>
  )
}
 export default Router
