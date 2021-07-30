import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './PlaySheet.less'


export default class PlaySheet extends Component {
    static propTypes = {
        coverImgUrl: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
        playCount: PropTypes.number
    }
    static defaultProps = {
        playCount: 0
    }

    showPlayCount = count => {
      if (count % 10000) {
         return  <span className="play-num">{(count % 10000) + '万'}</span>
      }
      return  <span className="play-num">{count}</span>
    }
    render() {
        const {coverImgUrl, name, playCount, description} = this.props;
        return (
            <div className="play-sheet">
               <div className="play-sheet-cover">
                   <img src={coverImgUrl} alt="cover image" />
                   <a href="#" title={description} className="cover-mask"></a>
                   <div className="bottom">
                      <a href="#" className="play-icon"></a>
                      <span className="headset-icon"></span> 
                      {this.showPlayCount(playCount)}
                   </div>
               </div>
               <p className="play-sheet-desc">
                   <a href="#">{name}</a>
                </p> 
            </div>
        )
    }
}
