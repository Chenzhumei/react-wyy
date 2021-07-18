import React, { Component } from 'react'
import BannerCarousel from './../Component/BannerCarousel/BannerCarousel'
import './Recomend.less'

export default class Recomend extends Component {
    render() {
        return (
            <div className="recomend">
            <div className="main">
                <BannerCarousel />   
                <div className="download">
                    <a href="#" className="btn">下载客户端</a>
                    <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
                    <span className="shadow"></span>
                    <span className="shadowr"></span>
                </div> 
            </div>
           </div>
        )
    }
}
