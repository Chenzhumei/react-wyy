import React, { Component } from 'react'
import {reqSheets} from './../../../api/homeApi'
import BannerCarousel from './../Component/BannerCarousel/BannerCarousel'
import TabHeader from './../Component/TabHeader/TabHeader'
import PlaySheet from './../../../components/PlaySheet/PlaySheet'
import './Recomend.less'

export default class Recomend extends Component {
    state = {
        playlists:[]
    };
    getList = () => {
        const param = {limit:8, cat:'华语'}
        reqSheets(param).then(res => {
            const {playlists} =  res;
            this.setState({playlists})
        });  
    }
    componentDidMount() {
        this.getList();
    }
    render() {
        const hotRecomend = {title: '热门推荐', moreLink:'#', tabs: ['华语','流行','摇滚']}
        const newAlbum = {title: '新碟上架', moreLink:'#'}
        const topSheet = {title: '榜单', moreLink:'#'}
        const {playlists} = this.state;
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
                        <section>
                            <TabHeader {...hotRecomend}/>
                            <div className="tab-content clearfix">
                            { playlists.map(item =>  <PlaySheet key={item.id} className="fl" {...item}/>) }
                            </div>
                        </section>
                        <section>
                            <TabHeader {...newAlbum}/>
                        </section>
                        <section>
                            <TabHeader {...topSheet}/>
                        </section>
                    </div>
                    <div className="right"></div>
                </div>
            </div>
           </div>
        )
    }
}
