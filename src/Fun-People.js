import React, { Component } from 'react'

const Person = (props) => {
  let { name, reason, remove } = props
  return (
    <div className="column is-4">
      <div className="box content is-medium">
        <p>
          {name} is fun because {reason}.
        </p>
        <button className="button is-link"
                onClick={remove}>
          Remove {name}
        </button>
      </div>
    </div>
  )
}

class FunPeople extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      reason: '',
      isDisabled: true,
      funArray: [{
        name: 'Bill',
        reason: 'he likes to party'
      },{
        name: 'Billy',
        reason: 'he parties harder than Bill'
      },{
        name: 'William',
        reason: "he doesn't party at all"
      }]
    }
  }
  updateName(event) {
    this.setState({
      name: event.target.value
    })
  }
  updateReason(event) {
    this.setState({
      reason: event.target.value
    })
  }
  isDisabled() {
    if(this.state.name && this.state.reason) {
      this.setState({
        isDisabled: false
      })
    }
  }
  addFunPerson(event) {
    event.preventDefault()
    let newArray = this.state.funArray
    newArray.push({
      name: this.state.name,
      reason: this.state.reason
    })
    this.setState({
      name: '',
      reason: '',
      funArray: newArray
    })
  }
  removeFunPerson(index) {
    console.log(index)
    let newArray = this.state.funArray.filter((person, arrIndex) => arrIndex !== index)
    this.setState({
      funArray: newArray
    })
  }
  render() {
    return (
      <section className="content">
        <h1 className="title">
          List of Fun People
        </h1>
        <div className="box">
          <form onSubmit={(event) => this.addFunPerson(event)}>
            <div className="field">
              <label className="label">
                Name
              </label>
              <div className="control">
                <input type="text"
                        id="nameInput"
                        className="input is-medium"
                        onChange={(event) => this.updateName(event)}
                        value={this.state.name} />
              </div>
            </div>
            <div className="field">
              <label className="label">
                Reason they are fun
              </label>
              <div className="control">
                <input type="text"
                        className="input is-medium"
                        onChange={(event) => this.updateReason(event)}
                        value={this.state.reason} />
              </div>
            </div>
            <div className="field">
              <input type="submit"
                      className="button is-link is-medium"
                      // disabled={this.state.isDisabled ? true : false}
                      value="Add Fun Person" />
            </div>
          </form>
        </div>
        <div className="columns is-multiline">
          {this.state.funArray.map((person, index) => <Person key={index} name={person.name} reason={person.reason} remove={() => this.removeFunPerson(index)}/>)}
        </div>
      </section>
    )
  }
}

export default FunPeople
