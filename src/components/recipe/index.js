import React, { Component } from "react";

import { recipeModalOpened } from "../../actions";

import store from "../../store";
import './index.css';

export default class Recipe extends Component {
    openRecipeModal = () => {
        store.dispatch(recipeModalOpened(this.props.fullData));
    }

    render() {
        const { label, image } = this.props;

        return (
            <div className="recipes-catalog__recipe recipe">
                <h3 className="recipe__title" onClick={() => this.openRecipeModal()}>{label}</h3>
                <img className="recipe__img" src={image} alt={label}/>
            </div>
        )
    }
}
