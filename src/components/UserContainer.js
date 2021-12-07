import React, { Component } from "react";

import UserCard from '../components/UserCard'
import { userId } from "../utilities/index";

import { connect } from 'react-redux'
import { setUser} from '../redux/actions/UserActions'

class UserContainer extends Component {
  componentDidMount() {
    fetch(`http://localhost:3001/users/${userId()}`)
      .then((response) => response.json())
      .then((data) => {
          console.log(data)
          this.props.dispatchSetUser(data)
        });
  }
  render() {
    return <div>
        UserOne
        {/* {this.props.userReducer.first_name} */}
        < UserCard user={this.props.user}/>
    </div>;
  }
}

const mapDispatchToProps = (dispatch) => {
    return{
        dispatchSetUser: (user) => dispatch(setUser(user))
    }
}

const mapStateToProps = (state) => {
    // debugger
    return {
        ...state.userReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
