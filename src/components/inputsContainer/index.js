import React, { Component } from "react";
import Input from "../input";

import './inputsContainer.css'

export default class InputsContainer extends Component {
    render() {
        return(
            <div className="inputs-container">
                <Input/>
            </div>
        )
    }
}