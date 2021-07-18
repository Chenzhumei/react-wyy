import React, { Component } from 'react'
import { Carousel } from 'antd';
import './HomeCarousel.less'
import {reqBanner} from './../../../../api/homeApi'

export default class HomeCarousel extends Component {
    state = {
        banners:[] 
    }
    componentDidMount() {
        reqBanner().then(res => {
            const {banners} = res;
            this.setState({banners})
        });  
    }
    render() {
        const {banners} = this.state;
        return (
                banners.length?
                <Carousel style={{width:730}} autoplay>
                    {
                        banners.map(item => (
                            <div key={item.targetId}>
                                <a href={item.url} target="_blank" className="banner-item">
                                    <img src={item.imageUrl} />
                                </a>
                            </div>
                        ))
                    }
                </Carousel>
                : <div>没有数据</div>
        )
    }
}
