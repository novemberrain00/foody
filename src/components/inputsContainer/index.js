import React, { Component } from "react";
import { connect } from "react-redux";

import Input from "../input";
import FoodyService from "../../services";

import { addInput, recipesListSetted } from "../../actions";

import store from '../../store';
import './inputsContainer.css';

class InputsContainer extends Component {

    async componentDidMount() {
        const list = await new FoodyService().getRecipes();
        store.dispatch(recipesListSetted(list.hits));
    }

    render() {
        const { inputsArr } = this.props;

        return(
            <div className="inputs-container">
                {
                    inputsArr.map((item, i) => {
                        return <Input value={item.value} arr={inputsArr} id={item.key} key={new FoodyService().randStr(3)}/>
                    })
                }
                <div onClick={() => store.dispatch(addInput(inputsArr))} 
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
        inputsArr: state.inputs.inputsArr
    }
}

export default connect(mapStateToProps)(InputsContainer);