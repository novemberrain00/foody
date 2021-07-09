import React, { Component } from 'react';

import { remIng } from '../../actions';
import store from '../../store';

import './ingredient.css'

class Ingredient extends Component {
    constructor() {
        super()
        this.state={
            showInput: true,
            inputClassList: "search-container__item input"
        };

        this.onInputRemoved = this.onInputRemoved.bind(this)
    }

    onInputRemoved() {
        this.setState({inputClassList: "search-container__item input input_removed"});
        setTimeout(()=>{
            this.setState({showInput: false});
            store.dispatch(remIng());
        }, 990);
    }

    render() {
        
        if(this.state.showInput) {
            if(this.props.amount > 1) {
                return (
                    <div className="input-wrapper">
                        <input className={this.state.inputClassList} placeholder="Название ингредиента..."/>
                        <button onClick={this.onInputRemoved} className="search-container__removing">-</button>
                    </div>
                )
            } else {
                return (
                    <div className="input-wrapper">
                        <input className={this.state.inputClassList} placeholder="Название ингредиента..."/>
                    </div>
                )
            }
        } else {
            return null;
        }
    }
}


export default Ingredient;