import React, {Component} from 'react'

class TodoItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      todo : false
    }
  }
  handleDelete () {
    this.props.onDeleteTodo(this.props.index);
  }
  handleComplete () {
      this.setState({
        todo : !this.state.todo
      });
  }

  render() {
    var className = this.state.todo ? ' todoFinished' : '';
    return (
      <li>
        <p className={"todoText"+ className} onClick={this.handleComplete.bind(this)}>{this.props.item}</p>
        <button onClick={this.handleDelete.bind(this)}>X</button>
      </li>
    )
  }
}

export default TodoItem
