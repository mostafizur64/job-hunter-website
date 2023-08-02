import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Layouts/Root';
import Home from './components/Home';
import Statistics from './components/Statistics';
import JobDetails from './components/JobDetails';
import AppliedJobs from './components/AppliedJobs';
import ErrorPage from './components/ErrorPage';
import Blog from './components/Blog';
import Footer from './components/Footer';

const router = createBrowserRouter([
  {
  path: '/',
  element:<Root></Root>,
  errorElement:<ErrorPage/>,
  children: [
    {
      path:'/',element:<Home></Home>,
     
    },
    {
     path:'jobDetails/:jobId',
     element:<JobDetails></JobDetails> ,
    },
    {
      path:'/statistics',
     element:<Statistics/>
    },
    {
      path:'/appliedJobs',
     element:<AppliedJobs/>
    },
    {
      path:'/blog',
      element:<Blog/>
    },
    {
      path:'footer',
      element:<Footer/>
    },
   
  ]
  },
  ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
