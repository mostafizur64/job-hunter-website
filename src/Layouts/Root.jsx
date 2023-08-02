import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div>
            <Outlet></Outlet>
         <Footer/>
        </div>
    );
};

export default Root;