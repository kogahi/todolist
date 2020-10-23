import React, { Component } from 'react';
import './css/Todo.css';

class Todo extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     id: props.todos.length,
  //   }
  // }
  render() {
    return(
      <li>
        <div className="list">
          <span classname="id">{this.props.id}</span>
          <div className="title">
           <span >{this.props.text}</span>
          </div>
          <button className="status">作業中</button>
          <button className="delete" onClick={()=> this.props.onDelete(this.props.id)}>削除</button>
        </div>
      </li>
    );
  }

}

export default Todo;