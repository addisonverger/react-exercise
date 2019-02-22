import React, { Component } from 'react';

//update state for addParagraph and deleteParagraph

class LoremIpsum extends Component {
  constructor(props) {
    super(props)
    this.state = {
      paragraphArray: []
    }
  }
  addParagraph = () => {

  }
  render() {
    return (
      <section className="content">
        <h1 className="title">
          "Number of Lorem Ipsum paragraphs:"
          {this.state.paragraphArray.length}
        </h1>
        <div className="buttons">
          <button className="button is-info is-medium" onClick={this.addParagraph}>Add Paragraph</button>
          <button className="button is-info is-medium">Remove Paragraph</button>
        </div>
        <div className="content">
          {/* {Paragraphs} */}
        </div>
      </section>
    )
  }
}

export default LoremIpsum
