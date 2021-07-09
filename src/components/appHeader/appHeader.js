import React, { Component } from 'react';
import Hamburger from '../hamburger';
import AllRecipes from '../allRecipes';

import './appHeader.css'

export default class AppHeader extends Component {
    render() {
        return (
            <header className="app-header">
                <Hamburger/>
                <AllRecipes/>
            </header>
        )
    }
} 