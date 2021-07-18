import React, { Component, Fragment } from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import {routers} from '../../config/router'
import Header from '../Header/Header'


export default class Dashbord extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                    <Switch>
                        <Redirect from='/' exact to='/discover/recomend'/>
                        <Redirect from='/discover' exact to='/discover/recomend'/>
                        {
                            routers.map(router=> {
                                return (
                                    <Route  
                                        key={router.path} 
                                        path={router.path} 
                                        component={router.component}
                                    />
                                 
                                )
                            })
                            
                        }
                    </Switch>
           </Fragment>
        )
    }
}
