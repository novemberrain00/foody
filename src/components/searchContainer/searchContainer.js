import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from '../../store';
import { addIng, updIngsArr, setAllRecipes } from '../../actions';

import Ingredient from '../ingredient';
import FoodyService from '../../services';

import './searchContainer.css'

class SearchContainer extends Component {

    componentDidMount = async () => {
        await new FoodyService().getRecipes("https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=5439c2fe&app_key=335b3847bf78d129e80af9d756aedfaf")
        .then(res => {
            console.log(res);
            store.dispatch(setAllRecipes(res.hits));
        });
    
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