import React, { Component } from 'react';

class Input extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      InputValue : ''
    }
  }

  render() {
    return (
      <div>
        <input className="input" type='text' onChange={this.updateInputValue.bind(this)}/>
        <button className="addButton" onClick={this.clickHandler.bind(this)}>add</button>
      </div>
    )
  }
  clickHandler(e) {
    this.props.addTodo(this.state.InputValue);
  }

  updateInputValue(evt) {
     this.setState({
       InputValue: evt.target.value
     });
   }
}

export default Input
