import React, { Component } from 'react';
import Hamburger from '../hamburger';
import AllRecipes from '../allRecipes';

import './appHeader.css'

export default class AppHeader extends Component {
    render() {
        return (
            <div className="app-header">
                <Hamburger/>
                <AllRecipes/>
            </div>
        )
    }
} 