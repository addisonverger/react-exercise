import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import LoremIpsum from './Lorem-Ipsum.js'
import HelloReact from './Hello-React.js'
import LoginForm from './Login-Form.js'
import FunPeople from './Fun-People.js'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTab: 'hello-react',
      isActive: 0
    }
  }
  openTab = (currentTab) => {
    const contents = {
      'hello-react': 0,
      'lorem-ipsum': 1,
      'login-form': 2,
      'fun-people': 3
    }
    this.setState({
      currentTab: currentTab,
      isActive: contents[currentTab]
    })
  }
  render() {
    const contents = {
      'hello-react': <HelloReact />,
      'lorem-ipsum': <LoremIpsum />,
      'login-form': <LoginForm />,
      'fun-people': <FunPeople />
    }

    return (
      <section className="section">
        <div className="container">
          <div className="tabs is-boxed is-medium">
            <ul>
              <li className={this.state.isActive === 0 ? 'is-active' : ''}>
                <a onClick={() => this.openTab('hello-react')}>Hello React</a>
              </li>
              <li className={this.state.isActive === 1 ? 'is-active' : ''}>
                <a onClick={() => this.openTab('lorem-ipsum')}>Lorem Ipsum</a>
              </li>
              <li className={this.state.isActive === 2 ? 'is-active' : ''}>
                <a onClick={() => this.openTab('login-form')}>Login Form</a>
              </li>
              <li className={this.state.isActive === 3 ? 'is-active' : ''}>
                <a onClick={() => this.openTab('fun-people')}>Fun People</a>
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
