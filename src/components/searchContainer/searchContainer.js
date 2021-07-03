import React, { Component } from 'react';
import { connect } from 'react-redux';

import Ingredient from '../ingredient';
import Add from '../add';

import './searchContainer.css'

class SearchContainer extends Component {

    render() {

        const renderIngs = () => {
            const ings = [];
            for(let i = 0; i <= this.props.quantity; i++) {
                ings.push(<Ingredient key={i}/>)
            }

            return ings;
        }

        return (
            <div className="search-container">
                {renderIngs()}
                <Add/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        quantity: state.ings.quantity
    }
}

export default connect(mapStateToProps)(SearchContainer);