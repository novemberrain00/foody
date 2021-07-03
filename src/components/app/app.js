import React, { Component } from 'react';
import AppHeader from '../appHeader';
import { Provider } from 'react-redux';
import SearchContainer from '../searchContainer';

import store from '../../store';

import './app.css'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <AppHeader/>
          <SearchContainer/>
        </div>
      </Provider>
    )
  }
}
