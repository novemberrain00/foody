import React, { Component } from 'react';
import AppHeader from '../appHeader';
import SearchContainer from '../searchContainer';

import './app.css'

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <AppHeader/>
        <SearchContainer/>
      </div>
    )
  }
}
