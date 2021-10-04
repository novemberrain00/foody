import React, { Component } from "react";

import './input.css'

export default class Input extends Component {
    render() {
        return (
            <div className="input-wrapper">
                <input className="input" type="text" placeholder="Enter some ingredient"/>
                <div className="input-wrapper__button button" id="remove-input">-</div>
            </div> 
        )
    }
}