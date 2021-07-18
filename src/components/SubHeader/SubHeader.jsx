import React, { Component } from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import './SubHeader.less'
class SubHeader extends Component {
    render() {
        const subMenuArr = [
            {path:'/discover/recomend', name:'推荐'},
            {path:'/discover/toplist', name:'排行榜'},
            {path:'/discover/playlist', name:'歌单'},
            {path:'/discover/djradio', name:'主播电台'},
            {path:'/discover/artist', name:'歌手'},
            {path:'/discover/album', name:'新碟上架'}
        ]
        const path = this.props.location.pathname;
        return (
            <div className="sub-header">
               <ul className="main">
                   {
                       subMenuArr.map((menu, index) => {
                           return (
                            <li key={index}>
                                <NavLink to={menu.path}>
                                    <span className={path === menu.path ? 'active':''} >{menu.name}</span>
                                </NavLink>
                            </li>
                           )
                       })
                   }
                </ul> 
            </div>
        )
    }
}


export default withRouter(SubHeader)
