import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import JobInfo from './routes/job-info/job-info';
import Home from './components/home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/job-info/:jobId",
    element: <JobInfo/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

