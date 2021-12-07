import React, { Component } from 'react'

class UserCard extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello User {this.props.user.first_name}</h1>
                <img src={this.props.user.image} alt="" />
                <p> Start Weight: {this.props.user.start_weight}</p>
                <p>Height: {this.props.user.height}</p>
                <p>Gender: {this.props.user.gender}</p>
                <p>Birth Date: {this.props.user.birth_date}</p>

            </div>

        )
    }
}

export default UserCard