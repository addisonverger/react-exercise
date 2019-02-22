import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import LoremIpsum from './Lorem-Ipsum.js'
import HelloReact from './Hello-React.js'



const LoginForm = () => {
  return (
    <div>LoginForm</div>
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTab: 'hello-react'
    }
  }
  openTab = (currentTab) => {
    this.setState({
      currentTab: currentTab
    })
  }
  render() {
    const contents = {
      'hello-react': <HelloReact />,
      'lorem-ipsum': <LoremIpsum />,
      'login-form': LoginForm,
    }

    return (
      <section className="section">
        <div className="container">
          <div className="tabs is-boxed is medium">
            <ul>
              <li className="is-active">
                <a onClick={() => this.openTab('hello-react')}>Hello React</a>
              </li>
              <li>
                <a onClick={() => this.openTab('lorem-ipsum')}>Lorem Ipsum</a>
              </li>
              <li>
                <a onClick={() => this.openTab('login-form')}>Login Form</a>
              </li>
            </ul>
          </div>
          { contents[this.state.currentTab] }
        </div>
      </section>
    );
  }
}

export default App;
