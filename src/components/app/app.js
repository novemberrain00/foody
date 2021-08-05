import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import AppHeader from '../appHeader';
import Menu from '../menu';
import RecipesContainer from '../recipesContainer';
import SearchContainer from '../searchContainer';

import store from '../../store';

import './app.css'

export default class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <div className="app">
          <Router>
            <Menu/>
            <AppHeader/>
            <Route exact path="/" component={SearchContainer}/>
            <Route path="/catalog" component={RecipesContainer}/>
          </Router>
        </div>
      </Provider>
    )
  }
}
