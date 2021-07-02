import React, { Component } from 'react';
import Ingredient from '../ingredient'
import Add from '../add';

import './searchContainer.css'

export default class SearchContainer extends Component {
    render() {
        return (
            <div className="search-container">
                <Ingredient/>
                <Add/>
            </div>
        )
    }
}