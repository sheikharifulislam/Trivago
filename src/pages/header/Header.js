import React from 'react';
import HeaderBanner from '../headerBanner/HeaderBanner';
import NavBar from '../navBar/NavBar';

const Header = () => {
    return (
        <header>
            <NavBar/>
            <HeaderBanner/>
        </header>
    );
};

export default Header;