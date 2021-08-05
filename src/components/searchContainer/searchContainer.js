import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from '../../store';
import { addIng } from '../../actions';

import Ingredient from '../ingredient';

import './searchContainer.css'

class SearchContainer extends Component {

    renderIngs() {
        const ingsArr = [],
            { amountForCycle, amountForButton } = this.props;
            
        for(let i = 0; i < amountForCycle; i++) {
            ingsArr.push(<Ingredient id={i} key={i} amount={amountForButton}/>);
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
        amountForButton: state.ings.amountForButton,
        ingsLine: state.ings.ingsLine
    }
}

export default connect(mapStateToProps)(SearchContainer);