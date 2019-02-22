import React, { Component } from 'react';

let loremIpsumParagraph = `Lorem ipsum dolor sit amet, consectetur adipiscing
  elit. Vivamus faucibus at magna sit amet tristique. Suspendisse ut varius dui,
  tincidunt semper sapien. Nullam bibendum eros lectus, eu posuere velit
  ultrices sed. Proin consectetur lacus nec metus ullamcorper, ac tempus
  felis eleifend. Donec eu euismod nisl. Morbi fringilla justo sit amet
  blandit dictum. Fusce sollicitudin ipsum ut mauris posuere pharetra.
  Praesent vitae elit nec ex placerat faucibus a in diam. Sed bibendum sit
  amet dui at facilisis. Vivamus vitae felis lacinia, gravida lectus id,
  placerat ipsum. Interdum et malesuada fames ac ante ipsum primis in
  faucibus. Integer feugiat, sem in interdum tempor, nisi enim mollis nibh,
  luctus laoreet massa ligula nec ex.`

class LoremIpsum extends Component {
  constructor(props) {
    super(props)
    this.state = {
      paragraphArray: [loremIpsumParagraph, loremIpsumParagraph]
    }
  }
  addParagraph = () => {
    var newArray = this.state.paragraphArray
    newArray.push(loremIpsumParagraph)
    this.setState({
      paragraphArray: newArray
    })
  }
  removeParagraph = () => {
    var newArray = this.state.paragraphArray
    newArray.pop()
    this.setState({
      paragraphArray: newArray
    })
  }
  render() {
    return (
      <section className="content">
        <h1 className="title">
          Number of Lorem Ipsum paragraphs: {this.state.paragraphArray.length}
        </h1>
        <div className="buttons">
          <button className="button is-info is-medium" onClick={this.addParagraph}>Add Paragraph</button>
          <button className="button is-info is-medium" onClick={this.removeParagraph}>Remove Paragraph</button>
        </div>
        <div className="content">
          {
            this.state.paragraphArray.map((paragraph, index) => {
              return (<p key={index}>{paragraph}</p>)
            })
          }
        </div>
      </section>
    )
  }
}

export default LoremIpsum
