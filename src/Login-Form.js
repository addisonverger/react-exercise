import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      showAlert: false,
      alertMessage: '',
      success: false
    }
  }
  updateUsername(event) {
    this.setState({
      username: event.target.value
    })
  }
  updatePassword(event) {
    this.setState({
      password: event.target.value
    })
  }
  formSubmit(event) {
    event.preventDefault()
    if (!this.state.username) {
      this.setState({
        showAlert: true,
        alertMessage: 'Please enter a username.'
      })
    } else if (!this.state.password) {
      this.setState({
        showAlert: true,
        alertMessage: 'Please enter a password.'
      })
    } else (
      this.setState({
        showAlert: false,
        alertMessage: '',
        success: true
      })
    )
  }
  resetForm() {
    this.setState({
      username: '',
      password: '',
      success: false
    })
  }
  render() {
    return (
      <section className="content">
        <div style={{height: "40px"}}></div>
        <div className="columns is-centered">
          <div className="column is-half">
            {this.state.success ?
              <div className="box">
                <h1 className="title">
                  Login Success!
                </h1>
                <button className="button is-primary is-medium"
                        onClick={() => this.resetForm()}>
                  Reset Login Form
                </button>
              </div> :
            <div className="box">
              <h1 className="title">Login</h1>
              {this.state.showAlert ? <div className="notification is-danger">
                                {this.state.alertMessage}
                              </div> : null}
              <form onSubmit={(event) => this.formSubmit(event)}>
                <div className="field">
                  <label className="label">Username</label>
                  <div className="control">
                    <input placeholder="Username"
                          type="text"
                          id="usernameInput"
                          className="input is-medium"
                          onChange={(event) => this.updateUsername(event)}
                          value={this.state.username} />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input placeholder="Password"
                          type="password"
                          className="input is-medium"
                          onChange={(event) => this.updatePassword(event)}
                          value={this.state.password} />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <button className="button is-primary is-medium"
                            type="submit">
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>}
          </div>
        </div>
      </section>
    )
  }
}

export default LoginForm
