import React, { Component } from 'react'
import './SubHeader.less'

export default class SubHeader extends Component {
    render() {
        const subMenuArr = ['推荐','排行榜','歌单','主播电台','歌手','新碟上架'];
        return (
            <div className="sub-header">
               <ul className="main">
                   {
                       subMenuArr.map((menu, index) => {
                           return (
                            <li key={index}>
                                <a href="#"><span className={index==0 ? 'active':''}>{menu}</span></a>
                            </li>
                           )
                       })
                   }
                </ul> 
            </div>
        )
    }
}
