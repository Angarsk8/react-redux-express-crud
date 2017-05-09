import React from "react"
import { Link } from 'react-router'

function NotFound() {
  return (
    <div className="jumbotron">
      <div className="text-center">
        <h1>404</h1>
        <p>Sorry, couldn't find a page at this address</p>
        <Link to="/">
          <span className="fa fa-home"></span> Take me home
        </Link>
      </div>
    </div>
  )
}

export default NotFound