import React, { Component } from 'react';
import TodoList from './TodoList';
import Form from './Form';
<<<<<<< HEAD
import './css/App.css'
=======
import './css/App.css';
>>>>>>> d47c35208397eef7d902f64a9d9812032976b9b2

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
    const todo = todos[id];
    todo.done = !todo.done;
    todos[id] = todo;
    this.setState({todos: todos});
  }

  render() {
    return (
      <div className="app">
        <h1>ToDoリスト</h1>
         <span className="column_id">ID</span>
         <span className="column_comment">コメント</span>
         <span className="column_status">状態</span>
        <TodoList
          todos={this.state.todos}
          onDelete={this.handleDelete.bind(this)}
          statusChange={this.handleStatusChange.bind(this)}
          />
        <Form 
          handleSubmit={this.handleSubmit.bind(this)}
        />
      </div>
    );
  }
}

export default App

