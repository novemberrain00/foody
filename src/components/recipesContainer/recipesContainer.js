import React, { Component } from 'react';

import FoodyService from '../../services';
import Recipe from '../recipe';
import Modal from '../modal';

import { connect } from 'react-redux';

import './recipesContainer.css';

class RecipesContainer extends Component {
    constructor() {
        super()
        this.state = {
            recipesData: []
        }
    }

    componentDidMount = async () => {
        await new FoodyService().getRecipes()
        .then(res => {
            this.setState({
                recipesData: res.hits
            })
        });
    }

    renderRecipes() {
        return this.state.recipesData.map((item, i) => {
            return <Recipe
                calories={item.recipe.calories} 
                ingsLines={item.recipe.ingredientLines}
                image={item.recipe.image}
                label={item.recipe.label}
                key={i}
            />
        })
    }

    render () {

        return (
            <div className="recipes">
                {
                    this.renderRecipes()
                }
                <Modal 
                    modalData={this.props.modalData}
                    modalWrapperClassList={this.props.modalWrapperClassList}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        modalWrapperClassList: state.modal.modalWrapperClassList,
        modalData: state.modal.modalData
    }
}

export default connect(mapStateToProps)(RecipesContainer)