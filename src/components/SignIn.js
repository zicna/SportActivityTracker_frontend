import React from 'react'
import signIn from '../async/signIn'

class UserForm extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            email:'',
            password:''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // *here we are calling imported fetch function
        const userObj = this.state
        signIn(userObj)
        //! now if user is logged in we will redirect?

        // * reset the local state
        this.setState({
            email:'',
            password:''
        })
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="email">Email</label>
            <input 
                required
                type="text" 
                id="email"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
                
                />
            <label htmlFor="password">Password</label>
            <input 
                required
                type="password" 
                id='password' 
                name='password'
                onChange={this.handleChange}
                value={this.state.password}
                />
            <input 
                type="Submit" 
                />
    
            </form>
        )
    }
}

export default UserForm


