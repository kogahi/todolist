import React, { Component } from 'react';
import TodoList from './TodoList';
import Form from './Form';
import Filter from './Filter';
import './css/App.css'

class App extends Component {
  constructor() {
    super()
    const todos = []
    this.state = {
      todos: todos,
      countTodo: todos.length,
      filter:'all',
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const text = e.target.text.value;
    const todos = this.state.todos.slice();
    const countTodo = this.state.countTodo;

    todos.push({
      id:countTodo,
      text:text,
      done:false,
    });

    this.setState({todos:todos})
    this.setState({countTodo: countTodo+1})
    e.target.text.value = '';
  }

  handleDelete(id){
    const todos = this.state.todos.slice();
    const deletedTodo = todos.filter(todo => todo.id !== id);
    const newTodos = deletedTodo.map(function(value, index){
        value.id = index
        return value
    })
    this.setState({todos: newTodos});
    this.setState({countTodo: todos.length-1})
  }
  
  handleStatusChange(id){ 
    const todos = this.state.todos.slice();
    const todo = todos.find(todo => todo.id === id);
    todo.done = !todo.done;
    this.setState({todos: todos});
  }

  changeRadio(e){
    this.setState({filter:e.target.value})
  }


  render() {
    return (
      <div className="app">
        <h1>ToDoリスト</h1>
        <Filter
          filter={this.state.filter}
          changeRadio={this.changeRadio.bind(this)}
         />
         <span className="column_id">ID</span>
         <span className="column_comment">コメント</span>
         <span className="column_status">状態</span>
        <TodoList
          todos={this.state.todos}
          onDelete={this.handleDelete.bind(this)}
          statusChange={this.handleStatusChange.bind(this)}
          filter={this.state.filter}
          />
        <Form 
          handleSubmit={this.handleSubmit.bind(this)}
        />
      </div>
    );
  }
}

export default App

