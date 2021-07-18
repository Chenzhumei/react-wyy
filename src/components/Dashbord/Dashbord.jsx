import React, { Component, Fragment } from 'react'
import {Route, Switch} from 'react-router-dom'
import routers from '../../config/router'
import Header from '../Header/Header'
import SubHeader from '../SubHeader/SubHeader'

export default class Dashbord extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                    <Switch>
                        {
                            routers.map(item => <Route exact key={item.path} path={item.path} component={item.component}></Route>)
                        }
                    </Switch>
           </Fragment>
        )
    }
}
