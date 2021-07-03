import React, { Component } from 'react';

import store from '../../store';
import { addIng } from '../../actions';

import './add.css'

export default class Add extends Component {
    render() {
        return (
            <button onClick={() => store.dispatch(addIng())} className="search-container__adding">+</button>
        )
    }
}