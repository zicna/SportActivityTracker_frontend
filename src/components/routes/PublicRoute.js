import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import {isLogin} from '../../utilities/index'

const PublicRoute = ({component: Component, restricted, ...res}) => {
    return(
        <Route {...res} render={props => (
            isLogin() && restricted ? <Redirect to="/dashboard" /> : <Component {...props} />
        )}
        />
    )
}
export default PublicRoute