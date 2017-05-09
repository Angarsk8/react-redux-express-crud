import React from 'react'
import { Link } from 'react-router'
import TableList from './TableList'

function Home({ users, updateUser }) {
  return (
    <div>
      <Link
        to="/users/new"
        className="btn btn-primary"
        style={{marginBottom: '15px'}}
      >
        Add User
      </Link>
      <TableList
        users={users}
        updateUser={updateUser}
      />
    </div>
  )
}

export default Home