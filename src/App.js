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
      countTodo: todos.length+1,
    }
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

    this.setState({todos})
    this.setState({countTodo: countTodo+1})

    e.target.text.value = '';
  }

  handleDelete(id){
    const todos = this.state.todos.slice();
    const newTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({todos: newTodos});
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
          onDelete={()=>this.handleDelete()}

          />
          <Form handleSubmit={this.handleSubmit.bind(this)}/>
      </div>
    );
  }
}

export default App

