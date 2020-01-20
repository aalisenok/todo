import React from 'react';
import './list-item.scss'

const ListItem = ({label, important = true}) => {
    return (
        <span>{label}</span>
    );
};

export default ListItem;