import React, {Component} from 'react';
import Todo from './Todo';
// import './TodoList.css';

class TodoList extends Component {

    render() {
      const todos = this.props.todos.map( todo =>
        <Todo
          key={todo.id}
          {...todo}
          onDelete = {this.props.onDelete}
        />
      )

      return(
        <ul>
          {todos}
        </ul>
      );
    }
  }
  
  export default TodoList