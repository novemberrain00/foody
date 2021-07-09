import React, { Component } from 'react';

import AppHeader from '../appHeader';
import { Provider } from 'react-redux';
import SearchContainer from '../searchContainer';
import Menu from '../menu';

import store from '../../store';

import './app.css'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Menu/>
          <AppHeader/>
          <SearchContainer/>
        </div>
      </Provider>
    )
  }
}
