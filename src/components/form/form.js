import React, { Component } from 'react';

import './form.scss'

export default class Form extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { label } = this.state;
        this.setState({ label: '' });
        const cb = this.props.onItemAdded || (() => {});
        cb(label);
    };

    render() {
        return (
            <form
                className="form d-flex"
                onSubmit={this.onSubmit}>

                <input type="text"
                       className="form-control form__label"
                       value={this.state.label}
                       onChange={this.onLabelChange}
                       placeholder="What needs to be done?" />

                <button type="submit"
                        className="btn btn-outline-secondary">Add</button>
            </form>
        );
    }
}
