import React from 'react';
import NavBar from '../Common/NavBar';
import { Outlet } from 'react-router';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>

        </div>
    );
};

export default Main;