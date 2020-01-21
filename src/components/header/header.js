import React from 'react';
import './header.scss';

const Header = ({toDo, done}) => {
    return (
        <div className="header d-flex">
            <h1 className="header__title">Todo List</h1>
            <h2 className="header__description">{toDo} more to do, {done} done</h2>
        </div>
    );
};

export default Header;
