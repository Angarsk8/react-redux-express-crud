import React from 'react'
import TableRecord from './TableRecord'

function TableList({ users, updateUser }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <TableRecord
            {...user}
            key={user.id}
            updateUser={updateUser}
          />
        ))}
      </tbody>
    </table>
  )
}

export default TableList