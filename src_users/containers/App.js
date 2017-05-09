import React, { Component, cloneElement } from 'react'
import { connect } from 'react-redux'
import {
  fetchUsersRequest,
  fetchUserRequest,
  createUserRequest,
  updateUserRequest,
  deleteUserRequest
} from '../actions'
import {
  getAllUsers,
  getCurrentUser
} from '../reducers'

class App extends Component {
  componentWillMount() {
    const { fetchUsers, fetchUser, params } = this.props

    if (params.userId) {
      fetchUser(params.userId)
    }

    fetchUsers()
  }

  componentWillReceiveProps(nextProps) {
    const prevUserId = this.props.params.userId
    const userId = nextProps.params.userId

    if (userId && userId !== prevUserId) {
      this.props.fetchUser(userId)
    }
  }


  render() {
    const { children, ...rest } = this.props
    return (
      <div
        className="container"
        style={{marginTop: '20px'}}
      >
        {cloneElement(children, rest)}
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    users: getAllUsers(state),
    currentUser: getCurrentUser(state)
  }
}

function mapActionsToProps(dispatch) {
  return {
    fetchUsers() {
      dispatch(fetchUsersRequest())
    },
    fetchUser(id) {
      dispatch(fetchUserRequest(id))
    },
    createUser(user) {
      dispatch(createUserRequest(user))
    },
    updateUser(id, changes) {
      dispatch(updateUserRequest(id, changes))
    },
    deleteUser(id) {
      dispatch(deleteUserRequest(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App)
