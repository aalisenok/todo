import React from 'react';
import './header.scss'

const Header = () => {
        return (
            <div className="header">
                <h1 className="header__title">Todo List</h1>
                <p className="header__description">1 more to do, 2 done</p>
            </div>
        );
};

export default Header;