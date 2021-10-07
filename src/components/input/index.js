import React, { Component } from "react";
import { removeInput, updateInputValue } from "../../actions";
import store from "../../store";

import './input.css'

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classList: "input-wrapper input-wrapper_showed"
        }
    }

    onInput = (e) => {
        const value = e.target.value;
        store.dispatch(updateInputValue({id: this.props.id, value}));
    }

    hideInput = () => {
        const { id } = this.props;

        this.setState({classList: "input-wrapper input-wrapper_hiden"});
        setTimeout(() => {
            store.dispatch(removeInput(id))
        }, 1000)
    }

    render() {
        const {id, arr} = this.props;
        
        if(arr.length < 2) {
            return <input 
                    onInput={this.onInput} 
                    id={id} 
                    className="input"
                    type="text" 
                    placeholder="Enter some ingredient"/>
        }
        return (
            <div className={this.state.classList}>
                <input 
                    onInput={this.onInput} 
                    id={id} className="input" 
                    type="text" 
                    placeholder="Enter some ingredient"
                />
                <div 
                    onClick={this.hideInput}  
                    className="input-wrapper__button button" 
                    id="remove-input">
                    -
                </div>
            </div> 
        )
    }
}