import React, { Component } from 'react';

import './ingredient.css'

export default class Ingredient extends Component {
    render() {
        return (
            <input className="search-container__item input" placeholder="Название ингредиента..."/>
        )
    }
}