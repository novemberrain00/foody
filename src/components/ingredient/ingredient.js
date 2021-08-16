import React, { Component } from 'react';
import { connect } from 'react-redux';

import { remIng, updIngsArr } from '../../actions';
import store from '../../store';

import './ingredient.css'

class Ingredient extends Component {
    constructor() {
        super()
        this.state = {
            showInput: true,
            inputClassList: "search-container__item input"
        };

        this.onInputRemoved = this.onInputRemoved.bind(this)
    }

    onInputRemoved() {
        this.setState({inputClassList: "search-container__item input input_removed"});

        const { ingsArr, id } = this.props,
        deletedItem = ingsArr.filter(item => item.id === id)[0];

        ingsArr.splice(ingsArr.indexOf(deletedItem), 1);

        store.dispatch(updIngsArr(ingsArr));

        setTimeout(()=>{
            this.setState({showInput: false});
        }, 990);

        store.dispatch(remIng());
    }

    editIng = (e) => {
        const { value } = e.target,
            { ingsArr, id } = this.props;

        ingsArr.filter(item => item.id === id)[0].value = value;

        store.dispatch(updIngsArr(ingsArr));
    }

    render() {
        
        const { onInputRemoved, editIng } = this;

        if(this.state.showInput) {
            if(this.props.amount > 1) {
                return (
                    <div className="input-wrapper" id={this.props.id}>
                        <input onInput={editIng} className={this.state.inputClassList} placeholder="Название ингредиента..."/>
                        <button onClick={onInputRemoved} className="search-container__removing">-</button>
                    </div>
                )
            } else {
                return (
                    <div className="input-wrapper" id={this.props.id}>
                        <input onInput={editIng} className={this.state.inputClassList} placeholder="Название ингредиента..."/>
                    </div>
                )
            }
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        ingsArr: state.ings.ingsArr
    }
}

export default connect(mapStateToProps)(Ingredient);