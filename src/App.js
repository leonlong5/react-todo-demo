import React, { Component } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import List from './components/List';
import './App.css';

class App extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      list : ["Meeting at 3 PM", "Read a book"]
    }
  }

  componentWillMount() {
    this._loadList();
  }

  _loadList() {
    let list = localStorage.getItem('list');
    if (list) {
      list = JSON.parse(list);
      this.setState({list});
    }
  }

  _saveList(list) {
    localStorage.setItem('list', JSON.stringify(list));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Input addTodo={this.addTodo.bind(this)}/>
        <List list={this.state.list} removeTodo={this.removeTodo.bind(this)}/>
      </div>
    );
  }

  addTodo (item) {
      let todoList = this.state.list;
      todoList.push(item);
      this.setState({todoList});
      this._saveList(todoList);
  }

  removeTodo (index) {
    let todoList = this.state.list;
    todoList.splice(index, 1)
    this.setState({ todoList })
    this._saveList(todoList)
  }
}

export default App;
