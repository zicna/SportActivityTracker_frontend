import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { logout, isLogin } from '../utilities/index'

class  Home extends Component {
    constructor(props){
        super(props)
        this.state ={
            isLogin: isLogin()
        }
    }

    handleLogout = () => {
        logout()
        this.setState({
            isLogin: false
        })
    }
    render(){
        return (
            <div>
                <h1>Home</h1>

                {this.state.isLogin ? 
                    <button onClick={() => this.handleLogout()}>Click here to log out</button>
                    : <Link to="/signin">Go to sign in page</Link>
                }
            </div>
        );
    }
}

export default Home