import React, { Component } from 'react';

export default class Menu extends Component {
    render() {
        return (
            <nav className="menu">
                <ul className="menu__list">
                    <li className="menu__list-item">
                        <a className="menu__list-link" href="#">Поиск рецепта</a>
                    </li>
                    <li className="menu__list-item">
                        <a className="menu__list-link" href="#">Каталог рецептов</a>
                    </li>
                    <li className="menu__list-item">
                        <a className="menu__list-link" href="#">GitHub</a>
                    </li>
                </ul>
            </nav>
        )
    }
}