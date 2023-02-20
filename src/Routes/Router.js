import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from '../Components/AuthProvider/PrivateRoute';
import BookMain from '../Components/BookMain/BookMain';
import Home from '../Components/Home/Home';
import Main from '../Components/Layout/Main';
import Login from '../UserInfo/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/booking',
        element: <PrivateRoute><BookMain></BookMain></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  }
])

export default router;