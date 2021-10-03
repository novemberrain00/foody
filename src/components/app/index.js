import React, { Component } from 'react';
import { connect } from 'react-redux';

import Banner from '../banner';
import InputsContainer from '../inputsContainer';

import './app.css';

class App extends Component {
    render() {
        if(this.props.isBannerVisible) {
            return <Banner 
                images={[
                    'foody/images/banner1.jpg', 
                    'foody/images/banner2.jpg', 
                    'foody/images/banner3.jpg'
                ]}
                titles={[
                    "Please to meet you at Foody!", 
                    "I hope you'l find here what you like",
                    "Just input some ingredients into fields and have a fun"
                ]}
            />
        } else {
            return(
                <div className="app" style={{background: "url('foody/images/app-bg.jpg') no-repeat"}}>
                    <InputsContainer/>
                </div>
            )
        }
        // return(
        //     <div className="app" style={{background: "url('foody/images/app-bg.jpg') no-repeat"}}>
        //             <InputsContainer/>
        //         </div>
        // )
    }
}

const mapStateToProps = (state) => {
    return {
        isBannerVisible: state.banner.isBannerVisible
    }
}

export default connect(mapStateToProps)(App)