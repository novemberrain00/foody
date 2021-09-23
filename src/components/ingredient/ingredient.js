import React, { Component } from 'react';
import { connect } from 'react-redux';

import { remIng, updIngsArr, recipesSelected } from '../../actions';
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

    parseRecipesList(list, value, selectedRecipes) {
        list.forEach(listItem => {
            let ingsLine = '';
            listItem.recipe.ingredientLines.forEach(ing => {
                ingsLine += ing;
            });

            if(ingsLine.toLocaleLowerCase().includes(value)) selectedRecipes.push(listItem);
        });

        store.dispatch(recipesSelected(selectedRecipes));
    }

    onInputRemoved() {
        this.setState({inputClassList: "search-container__item input input_removed"});

        const { ingsArr, id, allRecipes, selectedRecipes } = this.props,
        deletedItem = ingsArr.filter(item => item.id === id)[0],
        newSelectedRecipes = [];

        ingsArr.splice(ingsArr.indexOf(deletedItem), 1);

        store.dispatch(updIngsArr(ingsArr));

        ingsArr.forEach((ing, i) => {
            if(i < 1) {
                this.parseRecipesList(allRecipes, ing.value, newSelectedRecipes);
            } else {
                this.parseRecipesList(selectedRecipes, ing.value, newSelectedRecipes);
            }
        })

        setTimeout(()=>{
            this.setState({showInput: false});
        }, 990);

        store.dispatch(remIng());
    }

    editIng = (e) => {
        const { value } = e.target,
            { ingsArr, id, allRecipes, selectedRecipes } = this.props,
            newSelectedRecipes = [];

        ingsArr.filter(item => item.id === id)[0].value = value;

        if(ingsArr.length === 1) {
            this.parseRecipesList(allRecipes, value, newSelectedRecipes);
        } else {
            this.parseRecipesList(selectedRecipes, value, newSelectedRecipes);
        }
        
        
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
        ingsArr: state.ings.ingsArr,
        allRecipes: state.ings.allRecipes,
        selectedRecipes: state.ings.selectedRecipes
    }
}

export default connect(mapStateToProps)(Ingredient);