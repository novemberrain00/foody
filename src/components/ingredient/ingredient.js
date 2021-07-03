import React, { Component } from 'react';

import { remIng } from '../../actions';
import store from '../../store';

import './ingredient.css'

export default class Ingredient extends Component {
    constructor() {
        super()
        this.state={
            buttonClicked: false
        };

        this.onInputRemoved = this.onInputRemoved.bind(this)
    }

    onInputRemoved() {
        this.setState({buttonClicked: true});
        setTimeout(()=>{store.dispatch(remIng())}, 1000);
    }

    render() {

        const inputClassList = this.state.buttonClicked ? 
                            "search-container__item input input_removed" : "search-container__item input";

        return (
            <div className="input-wrapper">
                <input className={inputClassList} placeholder="Название ингредиента..."/>
                <button onClick={this.onInputRemoved} className="search-container__removing">-</button>
            </div>
        )
    }
}
