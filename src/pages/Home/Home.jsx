import React, { Component, Fragment  } from 'react'
import './Home.less'
import Header from '../../components/Header/Header'
import SubHeader from '../../components/SubHeader/SubHeader'

export default class Home extends Component {
    render() {
        return (
           <Fragment>
               <Header />
               <SubHeader />
           </Fragment>
        )
    }
}
