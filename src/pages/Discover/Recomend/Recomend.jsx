import React, { Component } from 'react'
import BannerCarousel from './../Component/BannerCarousel/BannerCarousel'
import TabHeader from './../Component/TabHeader/TabHeader'
import './Recomend.less'

export default class Recomend extends Component {
    render() {
        const hotRecomend = {title: '热门推荐', moreLink:'#', tabs: ['华语','流行','摇滚']}
        const newAlbum = {title: '新碟上架', moreLink:'#'}
        const topSheet = {title: '榜单', moreLink:'#'}
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
                <div className="content">
                    <div className="left">
                    <TabHeader {...hotRecomend}/>
                    <TabHeader {...newAlbum}/>
                    <TabHeader {...topSheet}/>
                    </div>
                    <div className="right"></div>
                </div>
            </div>
           </div>
        )
    }
}
