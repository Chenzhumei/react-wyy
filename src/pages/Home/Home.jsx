import React, { Component, Fragment  } from 'react'
import './Home.less'
import Header from '../../components/Header/Header'
import SubHeader from '../../components/SubHeader/SubHeader'
import HomeCarousel from './Component/HomeCarousel/HomeCarousel'

export default class Home extends Component {
    render() {
        return (
           <Fragment>
               <Header />
               <SubHeader />
               <div className="content">
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
           </Fragment>
        )
    }
}
