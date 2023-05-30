import React, { useState } from "react";
import Login from "./routes/login/login";
import SignUp from "./routes/sign-up/sign-up";
import Movies from "./movies/movies";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Movies />,
  },
]);

const accesiblePages = createBrowserRouter([
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/log-in",
    element: <Login />,
  },
  {
    path:"*",
    element:<Navigate to="/log-in"/>
  }
]);

function Router() {
  const [logged, setLogged] = useState(false);
  return <RouterProvider router={logged ? router :accesiblePages } />;
}

export default Router;
