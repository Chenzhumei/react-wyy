import React, { Component } from 'react'
import './PlaySheet.less'

export default class PlaySheet extends Component {
    render() {
        return (
            <div className="play-sheet">
               <div className="play-sheet-cover">
                   <img src="http://p2.music.126.net/m96Avv3sw-EJjL8QlRFg8A==/109951165007346256.jpg?param=140y140" alt="" />
                   <a href="" className="cover-mask"></a>
                   <div className="bottom">
                      <a href="#" className="play-icon"></a>
                      <span className="headset-icon"></span> 
                      <span className="play-num">740万</span>
                   </div>
               </div>
               <p className="play-sheet-desc">
                   <a href="#">翻唱｜我为你翻山越岭 却无心看风景</a>
                </p> 
            </div>
        )
    }
}
