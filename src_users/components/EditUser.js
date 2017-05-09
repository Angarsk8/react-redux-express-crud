import React, { Component } from 'react'

class EditUser extends Component {
  constructor() {
    super()
    this.state = {
      id: '',
      name: '',
      lastName: '',
      phone: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onChangeInput = this.onChangeInput.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.currentUser)
  }

  onSubmit(e) {
    e.preventDefault()
    const user = {
      name: this.nameInput.value,
      lastName: this.lastNameInput.value,
      phone: this.phoneInput.value
    }
    this.props.updateUser(this.state.id, user)
  }

  onChangeInput(e) {
    const inputName = e.target.name
    const inputValue = this[`${inputName}Input`].value

    this.setState({
      [inputName]: inputValue
    })
  }

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
      >
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="John"
            value={this.state.name}
            onChange={this.onChangeInput}
            ref={node => { this.nameInput = node }}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            placeholder="Doe"
            value={this.state.lastName}
            onChange={this.onChangeInput}
            ref={node => { this.lastNameInput = node }}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            className="form-control"
            placeholder="3141234567"
            value={this.state.phone}
            onChange={this.onChangeInput}
            ref={node => { this.phoneInput = node }}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-success"
        >
          Edit User
        </button>
      </form>
    )
  }
}

export default EditUser