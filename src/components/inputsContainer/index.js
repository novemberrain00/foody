import React, { Component } from "react";
import { connect } from "react-redux";

import Input from "../input";

import { addInput } from "../../actions";

import store from '../../store';
import './inputsContainer.css';

class InputsContainer extends Component {
    render() {
        const inputsArr = [];
        for(let i = 1; i <= this.props.amount; i++) {
            inputsArr.push(Input);
        };

        return(
            <div className="inputs-container">
                {
                    inputsArr.map((Input, i) => {
                        return <Input key={i}/>
                    })
                }
                <div onClick={() => store.dispatch(addInput())} 
                    className="inputs-container__button button" 
                    id="append-input">
                    +
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        amount: state.inputs.amount
    }
}

export default connect(mapStateToProps)(InputsContainer);