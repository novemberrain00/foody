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
            recipesData: [],
            prevPageUrl: "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=5439c2fe&app_key=335b3847bf78d129e80af9d756aedfaf",
            nextPageUrl: ""
        }
    }

    componentDidMount = async () => {
        await new FoodyService().getRecipes("https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=5439c2fe&app_key=335b3847bf78d129e80af9d756aedfaf")
        .then(res => {
            this.setState({
                recipesData: res.hits,
                nextPageUrl: res._links.next.href
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

    loadNextPage = async (e) => {
        e.preventDefault();

        await new FoodyService().getRecipes(this.state.nextPageUrl)
        .then(res => {
            console.log(res)
            this.setState({
                recipesData: res.hits,
                nextPageUrl: res._links.next.href
            })
        });
        
    }

    loadPrevPage = async (e) => {
        e.preventDefault();
        await new FoodyService().getRecipes(this.state.prevPageUrl)
        .then(res => {
            console.log(res)
            this.setState({
                recipesData: res.hits,
                nextPageUrl: res._links.next.href
            })
        });
        
    }

    renderPaginationLink(url, text, func, classList) {
        return url ? 
            <a onClick={func} href="#" className={classList}>{text}</a> :
            ' ';
    }

    render () {

        return (
            <>
                <div className="recipes">
                    {
                        this.renderRecipes()
                    }
                    <Modal 
                        modalData={this.props.modalData}
                        modalWrapperClassList={this.props.modalWrapperClassList}
                    />
                </div>
                { this.renderPaginationLink(this.state.prevPageUrl, "<", this.loadPrevPage, "link link_prev") }
                { this.renderPaginationLink(this.state.nextPageUrl, ">", this.loadNextPage, "link link_next") }
            </>
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