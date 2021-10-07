import React, { Component } from "react";
import { removeInput, updateInputValue } from "../../actions";
import store from "../../store";

import './input.css'

export default class Input extends Component {
    onInput = (e) => {
        const value = e.target.value;
        store.dispatch(updateInputValue({id: this.props.id, value}));
    }

    render() {
        const {id, arr} = this.props;
        
        if(arr.length < 2) {
            return <input onInput={this.onInput} id={id} className="input" type="text" placeholder="Enter some ingredient"/>
        }
        return (
            <div className="input-wrapper">
                <input onInput={this.onInput} id={id} className="input" type="text" placeholder="Enter some ingredient"/>
                <div 
                    onClick={()=>store.dispatch(removeInput(id))} 
                    className="input-wrapper__button button" 
                    id="remove-input">
                    -
                </div>
            </div> 
        )
    }
}