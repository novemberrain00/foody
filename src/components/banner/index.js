import React, { Component } from "react";
import { hideBanner } from "../../actions";

import store from '../../store';
import './banner.css'

export default class Banner extends Component {
    constructor() {
        super()
        this.state = {
            activePost: 0,
            bannerClassList: "banner"
        }

        this.changeActivePost = this.changeActivePost.bind(this);
    }

    changeActivePost() {
        if(this.state.activePost + 1 < this.props.images.length) {
            this.setState({
                activePost: this.state.activePost + 1
            });
        } else {
            this.setState({bannerClassList: "banner banner_hiden"});
            setTimeout(() => {
                store.dispatch(hideBanner());
            }, 800);
        }
    }

    render() {
        return(
            <div className={this.state.bannerClassList}>
                {
                    this.props.images.map((img, i) => {

                        const classList = i === this.state.activePost 
                        ? "banner__post banner__post_active"
                        : "banner__post";

                        return(
                            <div style={{background: `url(${window.location + img}) no-repeat`}} key={i} className={classList}>
                                <h2 className="banner__post-title">{this.props.titles[i]}</h2>
                            </div>
                        )
                    })
                }
                <div onClick={this.changeActivePost} className="banner__next">
                    <img src="foody/images/arrow-next.svg"/>
                </div>
            </div>
        )
    }
}