import React, {Component} from 'react';
import './app.scss'
import Header from "../header/header";
import Search from "../search/search";
import List from "../list/list";




export default class App extends Component {
    render() {
        const todoData = [
            {label: 'Drink coffee', important: false},
            {label: 'Make Awesome App', important: false},
            {label: 'Have a lunch', important: false}
        ];

        return (
            <div className="app">
                <Header/>
                <Search/>
                <List todos={todoData}/>
            </div>
        );
    };
};