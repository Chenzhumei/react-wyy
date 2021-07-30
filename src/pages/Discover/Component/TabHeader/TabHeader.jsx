import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './TabHeader.less'

export default class TabHeader extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        moreLink: PropTypes.string.isRequired,
        tabs: PropTypes.array
    }
    static defaultProps = {
        tabs: []
    }
    renderTabs = tabs => {
      const length = tabs.length;
      if (length) {
        return (
            <div className="tab">
             {
                 tabs.map((item, index) => {
                     if (index === length-1) {
                        return <a key={index} href="#" className="tab-name">{item}</a>
                     } else {
                        return (
                            <span key={index}>
                                <a  href="#" className="tab-name">{item}</a>
                                <span className="line">|</span>
                            </span>
                         )
                     }  
                 })
             }
           </div>
        )
      }
    }
    render() {
        const {title, tabs, moreLink} = this.props;
        return (
            <div className="tab-header">
                <a href="#" className="title">{title}</a>
                {
                  this.renderTabs(tabs)
                }
               
                <div className="more">
                    <a href={moreLink}>更多</a>
                    <i className="s-bg"></i>
                </div>
            </div>
        )
    }
}
