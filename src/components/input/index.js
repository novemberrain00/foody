import React, { Component } from "react";
import { removeInput } from "../../actions";
import store from "../../store";

import './input.css'

export default class Input extends Component {
    render() {
        const {id, arr} = this.props;
        
        if(arr.length < 2) {
            return <input id={id} className="input" type="text" placeholder="Enter some ingredient"/>
        }
        return (
            <div className="input-wrapper">
                <input id={id} className="input" type="text" placeholder="Enter some ingredient"/>
                <div 
                    onClick={()=>store.dispatch(removeInput())} 
                    className="input-wrapper__button button" 
                    id="remove-input">
                    -
                </div>
            </div> 
        )
    }
}