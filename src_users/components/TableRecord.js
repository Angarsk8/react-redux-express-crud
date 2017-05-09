import React from 'react'
import { Link } from 'react-router'

function TableRecord ({ id, name, lastName, phone, updateUser }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{lastName}</td>
      <td>{phone}</td>
      <td>
        <Link
          to={`/users/edit/${id}`}
          className="btn btn-warning"
          style={{
            marginRight: '10px',
            minWidth: '66px'
          }}
        >
          Edit
        </Link>
        <a
          className="btn btn-danger"
          onClick={e => {
            e.preventDefault()
            updateUser(id, { status: false })
          }}
        >
          Disable
        </a>
      </td>
    </tr>
  )
}

export default TableRecord