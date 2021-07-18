import React, { Component } from 'react'
import {Route, Redirect} from 'react-router-dom'
import './Discover.less'
import SubHeader from '../../components/SubHeader/SubHeader'
import {discoverChildren} from './../../config/router'

export default class Discover extends Component {
    render() {
        return (
               <div className="discover">
                <SubHeader />
                <Redirect from='/' exact to='/discover/recomend'/>
                {          
                            discoverChildren.map(router => {
                                return (
                                    <Route 
                                        key={router.path} 
                                        path={router.path} 
                                        component={router.component}
                                    />
                                 
                                )
                            })
                            
                        }
               </div>
        )
    }
}
