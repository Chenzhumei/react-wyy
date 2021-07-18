import React, { Component } from 'react'
import './Header.less'
import {Input, Button } from 'antd'
import {SearchOutlined} from '@ant-design/icons';

export default class Header extends Component {
   
    mainNavItems = ['发现音乐','我的音乐','朋友','商城','音乐人','下载客户端']

    render() {
        const searchInputProps = {
            style: {width: '180px', color: '#9b9b9b',marginRight:'16px'},
            prefix:<SearchOutlined style={{fontSize: '16px'}}/>,
            placeholder:"音乐/视频/电台/用户" 
        };
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
