import React, { Component, Fragment } from 'react'
import { Carousel } from 'antd';
import {LeftOutlined, RightOutlined} from '@ant-design/icons'
import './HomeCarousel.less'
import {reqBanner} from './../../../../api/homeApi'

export default class HomeCarousel extends Component {
    state = {
        banners:[] 
    }
    carouselRef = React.createRef()
    next = () => {
     this.carouselRef.current.next()
    }
    prev = () => {
        this.carouselRef.current.prev()
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
               <div className="carousel">
                    <Carousel style={{width:730}} autoplay ref={this.carouselRef}>
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
                   <LeftOutlined className="left-icon" onClick={this.prev}/>
                   <RightOutlined  className="right-icon" onClick={this.next}/>
               </div>
               
              
        )
    }
}
