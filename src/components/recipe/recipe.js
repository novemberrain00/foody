import React, { Component } from 'react';

import { openModal } from '../../actions';

import store from '../../store';
import './recipe.css';

export default class Recipe extends Component {
    render() {
        const { label, image, ingsLines, calories } = this.props;

        return (
            <div className="recipe">
                <div className="recipe__img-wrapper">
                    <img className="recipe__img" src={image} alt={label}/>
                </div>
                <h2 className="recipe__title">{label}</h2>
                <a href="#" onClick={ e =>{
                    e.preventDefault();
                    store.dispatch(openModal({
                    label,
                    image,
                    ingsLines,
                    calories
                })) }
                } className="recipe__link" href="#">Как приготовить</a>
            </div>
        )
    }
}