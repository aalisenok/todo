import React from 'react';
import './list.scss'
import Item from "../item/item";


const List = ({ items, onToggleImportant, onToggleDone, onDelete }) => {

    const elements = items.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className="list-group-item">
                <Item
                    { ...itemProps }
                    onToggleImportant={ () => onToggleImportant(id) }
                    onToggleDone={ () => onToggleDone(id) }
                    onDelete={ () => onDelete(id) } />
            </li>
        );
    });

    return (<ul className="list list-group">{ elements }</ul>);
};

export default List;