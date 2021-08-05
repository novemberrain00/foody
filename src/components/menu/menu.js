import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from "react-router-dom";

import './menu.css'

class Menu extends Component {
    render() {

        const menuClassList = this.props.isMenuOpened ? 
                            'menu menu_opened position-absolute' :
                            'menu position-absolute'
        
        return (
            <nav className={menuClassList}>
                <ul className="menu__list">
                    <li className="menu__list-item">
                        <Link className="menu__list-link" to="/">Ингредиенты</Link>
                    </li>
                    <li className="menu__list-item">
                        <Link className="menu__list-link" to="/catalog">Каталог рецептов</Link>
                    </li>
                    <li className="menu__list-item">
                        <a className="menu__list-link" href="#">Избранные рецепты</a>
                    </li>
                    <li className="menu__list-item">
                        <a className="menu__list-link" href="#">GitHub</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isMenuOpened: state.menu.isMenuOpened
    }
}

export default connect(mapStateToProps)(Menu);