import React from 'react'

function NewUser({ createUser }) {
  let nameInput, lastNameInput, phoneInput
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        const user = {
          name: nameInput.value,
          lastName: lastNameInput.value,
          phone: phoneInput.value
        }
        createUser(user)
      }}
    >
      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="John"
          ref={node => { nameInput = node }}
          required
        />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Doe"
          ref={node => { lastNameInput = node }}
          required
        />
      </div>
      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="tel"
          className="form-control"
          placeholder="3141234567"
          ref={node => { phoneInput = node }}
          required
        />
      </div>
      <button
        type="submit"
        className="btn btn-success"
      >
        Create User
      </button>
    </form>
  )
}

export default NewUser