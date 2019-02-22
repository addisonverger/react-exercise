import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import LoremIpsum from './Lorem-Ipsum.js'

//split helloreact into seperate file like lorem-ipsum

const HelloReact = () => {
  return (
    <section className="content">
      <h1 className="title">Hello React!</h1>
      <p>React makes it painless to create interactive UIs. Design simple views
      for each state in your application, and React will efficiently update and
      render just the right components when your data changes.</p>
      <p>Declarative views make your code more predictable and easier to debug.</p>
    </section>
  )
}

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
      'hello-react': HelloReact,
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
