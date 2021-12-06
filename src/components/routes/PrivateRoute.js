import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import { isLogin } from '../../utilities'

const PrivateRoute = ({component: Component, ...res}) => {
    return(
        <Route{...res} render={props =>(
            isLogin() ? <Component {...props} /> : <Redirect to='/signin'/>
        )} />
    )
}

export default PrivateRoute