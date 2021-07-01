import React, { Component } from 'react'
import './Header.less'

export default class Header extends Component {
   
    mainNavItems = ['发现音乐','我的音乐','朋友','商城','音乐人','下载客户端']

    render() {
        return (
            <div className="header">
                <div className="nav">
                    <div className="wrap">
                        <h1 className="logo"><a href="/#">网易云音乐</a></h1>
                        <ul className="main-nav">
                            {
                                this.mainNavItems.map((item, index) => {
                                    return (
                                        <li key={index}>
                                         <a href="/#" className={index === 0 ? 'active' : ''}>
                                             <em>{item}</em>
                                             <sub className={index === 0 ? "cor" : index === this.mainNavItems.length-1 ? "hot" : ""}></sub>
                                         </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
