import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from '../../store';
import { addIng, updIngsArr } from '../../actions';

import Ingredient from '../ingredient';

import './searchContainer.css'

class SearchContainer extends Component {

    componentDidMount() {
        const ingsObjArr = this.props.ingsArr;

        ingsObjArr.push({id: ingsObjArr.length, value: ''});
        
        store.dispatch(updIngsArr(ingsObjArr))
    }

    componentDidUpdate() {
        const ingsObjArr = this.props.ingsArr;

        ingsObjArr.filter(item => item.value !== '');
        if(ingsObjArr.length < this.props.amountForButton) ingsObjArr.push({id: this.props.amountForCycle-1, value: ''});

        store.dispatch(updIngsArr(ingsObjArr))
    }

    renderIngs() {
        const ingsElemsArr = [],
            { amountForCycle, amountForButton } = this.props;

        for(let i = 0; i < amountForCycle; i++) {
            ingsElemsArr.push(<Ingredient id={i} key={i} amount={amountForButton}/>);
        }

        return ingsElemsArr;
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
        ingsArr: state.ings.ingsArr
    }
}

export default connect(mapStateToProps)(SearchContainer);