import React, { Component } from 'react';

import './hamburger.css'

export default class Hamburger extends Component {
    render() {
        return (
            <div className="hamburger">
                <span className="hamburger__line"></span>
                <span className="hamburger__line"></span>
                <span className="hamburger__line"></span>
            </div>
        )
    }
}