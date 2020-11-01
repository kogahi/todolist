import React, {Component} from 'react';
import Todo from './Todo';

class TodoList extends Component {
    render() {
      const todos = this.props.todos.map( todo =>
        <Todo
          key={todo.id}
          {...todo}
          onDelete = {this.props.onDelete}
         statusChange = {this.props.statusChange}
        />
      );

       let filteredTodo = [];
      if(this.props.filter === 'all'){
        filteredTodo = todos;
      }else if(this.props.filter === 'uncompleted'){
        filteredTodo = todos.filter( todo => todo.props.done === false);
      }else{
        filteredTodo = todos.filter( todo => todo.props.done === true);
      }

      return(
        <ul>
          {filteredTodo}
        </ul>
      );
    }
  }
  
  export default TodoList