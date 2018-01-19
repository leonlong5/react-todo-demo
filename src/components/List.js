import React, { Component } from 'react';
import TodoItem from './TodoItem';

class List extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      value : ''
    }
  }

  handleDeleteTodo (index) {
    if (this.props.removeTodo) {
      this.props.removeTodo(index)
    }
  }

  render() {
    return (
      <ul>
        {
          this.props.list.map((item, i)=>{
            return (
              <TodoItem item={item} index={i} onDeleteTodo={this.handleDeleteTodo.bind(this)}/>
            )
          })
        }
      </ul>
    )
  }
}

export default List
