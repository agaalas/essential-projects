import { useContext } from "react";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../routes/home";
import NewFeedback from "../routes/new-feedback/new-feedback";
import FeedbackInfo from "../routes/comment/feedback-info";
import Login from "../routes/comment/login";
import SignUp from "../routes/comment/sign-up";
import { AuthContext } from "./context/auth-context";
import EditFeedback from "../routes/edit-feedback/edit-feedback";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/new-feedback",
      element: <NewFeedback />,
    },
    {
      path: "/feedback/:feedbackId",
      element: <FeedbackInfo />,
    },
    {
      path: "/edit-feedback",
      element: <EditFeedback />,
    },
    {
        path:"*",
        element:<Navigate to="/"/>
    }
  ]);
  
  const accesiblePages = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
        path:"*",
        element:<Navigate to="/login"/>
    }
  ]);
  
  function Router(){
   const{token}= useContext(AuthContext)
    return (
      <RouterProvider router={token?router:accesiblePages}/>
    )
  }
  export default Router