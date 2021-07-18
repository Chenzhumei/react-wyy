import React, { Component } from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import './Header.less'
import {Input, Button } from 'antd'
import {SearchOutlined} from '@ant-design/icons';

class Header extends Component {
   
    mainNavItems = [
        {path:'/discover', name:'发现音乐'},
        {path:'/myMusic', name:'我的音乐'},
        {path:'/friends', name:'朋友'},
        {path:'/shop', name:'商城'},
        {path:'/musician', name:'音乐人'},
        {path:'/download', name:'下载客户端'}
    ]

    render() {
        const searchInputProps = {
            style: {width: '180px', color: '#9b9b9b',marginRight:'16px'},
            prefix:<SearchOutlined style={{fontSize: '16px'}}/>,
            placeholder:"音乐/视频/电台/用户" 
        };
        const path = this.props.location.pathname;
        return (
            <div className="header">
                <div className="nav">
                    <div className="wrap">
                        <h1 className="logo"><a href="/#">网易云音乐</a></h1>
                        <ul className="main-nav">
                            {
                                this.mainNavItems.map((item) => {
                                    return (
                                        <li key={item.path}>
                                            <NavLink to={item.path} activeClassName={item.path === path?'active':''}>
                                                <em>{item.name}</em>
                                                <sub className={item.path === path ? "cor" : item.name === '下载客户端' ? "hot" : ""}></sub>
                                            </NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="right-nav">
                            <Input {...searchInputProps} />
                            <Button>创作者中心</Button>
                            <a href="#" className="login">登录</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Header)
