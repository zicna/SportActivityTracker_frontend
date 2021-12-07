import React, { Component } from 'react'

class UserCard extends React.Component{
    render(){
        return(
            <h1>Hello User One {this.props.user.first_name}</h1>
        )
    }
}

export default UserCard