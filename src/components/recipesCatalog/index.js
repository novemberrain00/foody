import React, { Component } from "react";
import { connect } from "react-redux";

import { recipesCatalogOpened, recipeCatalogClosed } from '../../actions';

import Recipe from "../recipe";
import FoodyService from "../../services";

import store from "../../store";
import './index.css';

class RecipesCatalog extends Component {
    openCatalog() {
        if(this.props.recipesList.length) store.dispatch(recipesCatalogOpened());
    }

    closeCatalog() {
        store.dispatch(recipeCatalogClosed())
    }

    render() {
        const { recipesList, isRecipesCatalogOpened } = this.props,
            { label, image, ingredientLines, calories } = this.props.recipeData,
            modalClassList = label === "" ? "recipes__modal recipes__modal_hiden" : "recipes__modal",
            catalogClassList = label === "" ? "recipes-catalog__block" : "recipes-catalog__block recipes-catalog__block_hiden";

        if(!isRecipesCatalogOpened) {
            return (
                <div className="recipes-catalog">
                    <span
                        className="recipes-catalog__link" 
                        onClick={() => this.openCatalog()}
                    >Recipes List ({recipesList ? recipesList.length : "0"})</span>
                </div>
            )
        }

        return (
            <div className="recipes-catalog">
                <div className="cross" onClick={() => this.closeCatalog()}>
                    <span className="cross__line" id="cross-part-1"></span>
                    <span className="cross__line" id="cross-part-2"></span>
                </div>

                <div className={catalogClassList}>
                    {
                        recipesList.map((recipeObj, i) => {
                            const { label, image } = recipeObj.recipe;
                            
                            return <Recipe fullData={recipeObj.recipe} label={label} image={image} key={new FoodyService().randStr(3)}/>
                        })
                    }
                </div>
        
                <div className={modalClassList}>
                    <h2 className="recipes__modal-title">{label}</h2>
                    <div className="recipes__modal-content">
                        <img src={image} className="recipes__modal-img" alt={label}/>
                        <ul className="recipes__modal-list"> 
                            {
                                ingredientLines.map((ing, i) => {
                                    return <li className="recipes__modal-ingredient" key={new FoodyService().randStr(3)}>{ing}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recipesList: state.recipes.recipesList,
        isRecipesCatalogOpened: state.recipes.isRecipesCatalogOpened,
        recipeData: state.recipes.recipeData
    }
}

export default connect(mapStateToProps)(RecipesCatalog);