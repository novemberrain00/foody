import React, { Component } from "react";

import './input.css'

export default class Input extends Component {
    render() {
        return <input className="input" type="text" placeholder="Enter some ingredient"/>
    }
}