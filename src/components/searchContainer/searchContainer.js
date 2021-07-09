import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from '../../store';
import { addIng } from '../../actions';

import Ingredient from '../ingredient';

import './searchContainer.css'

class SearchContainer extends Component {

    renderIngs() {
        const ingsArr = [];
        for(let i = 0; i < this.props.amountForCycle; i++) {
            ingsArr.push(<Ingredient amount={this.props.amountForButton}/>)
        }

        return ingsArr;
    }

    render() {
        
        return (
            <div className="search-container">
                { this.renderIngs() }
                <button onClick={() => store.dispatch(addIng())} className="search-container__adding">
                    +
                </button>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        amountForCycle: state.ings.amountForCycle,
        amountForButton: state.ings.amountForButton
    }
}

export default connect(mapStateToProps)(SearchContainer);