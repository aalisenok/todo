import React from 'react';
import './list.scss'
import ListItem from "../list-item/list-item";


const List = ({todos}) => {
    const elements = todos.map((item) => {
        return (
            <li>
                <ListItem
                    {...item}
                />
            </li>
        );
    });

    return (
        <ul>
            {elements}
        </ul>
    );
};

export default List;