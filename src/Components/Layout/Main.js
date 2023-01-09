import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';
import Navbar from '../Navbar';
import Footer from '../Footer'
const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;