import React, { Component } from 'react'
import { Carousel } from 'antd';
import './HomeCarousel.less'

export default class HomeCarousel extends Component {
    render() {
        const contentStyle = {
            height:'284px',
            color: '#fff',
            lineHeight: '284px',
            textAlign: 'center',
            background: '#364d79',
        };
        return (
                <Carousel style={{width:730}} autoplay>
                    <div>
                    <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>
        )
    }
}
