import React, { Component } from 'react';

import store from '../../store';
import { openMenu } from '../../actions';
import { connect } from 'react-redux';

import './hamburger.css'

class Hamburger extends Component {
    render() {

        const hamburgerClassList = this.props.isMenuOpened ?
                                "hamburger hamburger_active" :
                                "hamburger"

        return (
            <div onClick={()=>{store.dispatch(openMenu())}} className={hamburgerClassList}>
                <span className="hamburger__line"></span>
                <span className="hamburger__line"></span>
                <span className="hamburger__line"></span>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isMenuOpened: state.menu.isMenuOpened
    }
}

export default connect(mapStateToProps)(Hamburger)