import React from 'react';
import Search from '../Search/Search';
import './Header.scss';

const Header = props => {
    return (
        <div className="header">
            <h1 className="header__title">New Feeds</h1>
            <Search />
        </div>
    );
};

export default Header;
