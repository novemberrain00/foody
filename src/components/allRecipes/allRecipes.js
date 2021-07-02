import React, { Component } from 'react';

import './allRecipes.css'

export default class AllRecipes extends Component {
    render() {
        return (
            <div className="recipes-link-wrapper">
                <a className="recipes-link" href="#">Список рецептов (0)</a>
            </div>
        )
    }
}