import React, { Component } from 'react'
import './Discover.less'
import SubHeader from '../../components/SubHeader/SubHeader'
import HomeCarousel from './Component/BannerCarousel/BannerCarousel'

export default class Discover extends Component {
    render() {
        return (
               <div className="discover">
                <SubHeader />
                <div className="main">
                    <HomeCarousel />   
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
