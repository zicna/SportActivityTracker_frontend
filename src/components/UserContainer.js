import React, { Component } from "react";

import UserCard from '../components/UserCard'
import { userId } from "../utilities/index";

import { connect } from 'react-redux'
import { setUser} from '../redux/actions/UserActions'

class UserContainer extends Component {
  componentDidMount() {
   
    this.props.dispatchSetUser()
  }
  render() {
    return (
      <div>
        < UserCard user={this.props.user}/>
      </div>)
  }
}

const mapDispatchToProps = (dispatch) => {
    return{
        dispatchSetUser: () => dispatch(setUser())
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
