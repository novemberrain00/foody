import React, { Component } from 'react';
import { connect } from 'react-redux';

import './allRecipes.css'

class AllRecipes extends Component {
    render() {
        return (
            <div className="recipes-link-wrapper">
                <a className="recipes-link" href="#">Список рецептов ({this.props.recipesQuantity})</a>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recipesQuantity: state.ings.selectedRecipes.length
    }
}

export default connect(mapStateToProps)(AllRecipes);