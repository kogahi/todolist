import React, { Component } from 'react';
import TodoList from './TodoList';
import Form from './Form';

import './css/App.css'


class App extends Component {

  constructor() {
    super()
    const todos = []
    this.state = {
      todos: todos,
      countTodo: todos.length,
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
    const newTodos = todos.filter(todo => todo.id !== id);
    this.setState({todos: newTodos});
    console.log(this.state.todos[0].id);
    const newCount = this.state.todos.length;
    this.setState({countTodo:newCount});
  }


  render() {
    return (
      <div className="app">
        <h1>ToDoリスト</h1>
        {/* ここにラジオボタン
         */}
         <span className="column_id">ID</span>
         <span className="column_comment">コメント</span>
         <span className="column_status">状態</span>
        <TodoList
          todos={this.state.todos}
          onDelete={this.handleDelete.bind(this)}
          />
        <Form 
          handleSubmit={this.handleSubmit.bind(this)}
        />
      </div>
    );
  }
}

export default App

