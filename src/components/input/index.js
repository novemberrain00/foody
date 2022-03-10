import React, { Component } from "react";
import { connect } from "react-redux";
import { recipesListUpdated, removeInput, updateInputValue } from "../../actions";

import store from "../../store";
import './input.css';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classList: "input-wrapper",
            lastKeyCode: null,
            value: this.props.value
        }
    }

    onInput = (e) => {
        const value = e.target.value;

        this.setState({
            value
        })

        const { id, inputsArr } = this.props;

        store.dispatch(updateInputValue({id, value}));
        store.dispatch(recipesListUpdated({
            desiredValue: value, 
            keyCode: this.state.lastKeyCode, 
            valuesList: inputsArr
        }));
    }

    onKeyDown = (e) => {
        this.setState({lastKeyCode: e.keyCode})
    }

    hideInput = () => {
        const { id } = this.props;

        //this.setState({classList: "input-wrapper input-wrapper_hiden"});
        // setTimeout(() => {
        //     store.dispatch(removeInput(id))
        // }, 1000)
        store.dispatch(removeInput(id))
    }

    renderRemoveButton() {
        return this.props.arr.length < 2 ? null : <div 
                                                    onClick={this.hideInput}  
                                                    className="input-wrapper__button button" 
                                                    id="remove-input">
                                                    -
                                                </div>
    }

    render() {
        return (
            <div id={this.props.id} className={this.state.classList}>
                <input 
                    value={this.state.value}
                    onInput={this.onInput} 
                    onKeyDown={this.onKeyDown}
                    className="input" 
                    type="text" 
                    placeholder="Enter some ingredient"
                />

                {this.renderRemoveButton()} 
            </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recipesList: state.recipes.recipesList,
        inputsArr: state.inputs.inputsArr
    }
}

export default connect(mapStateToProps)(Input);