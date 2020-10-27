import React, { Component } from 'react';
import './css/Todo.css';

class Todo extends Component {
  render() {
    return(
      <li>
        <div className="list">
          <span classname="id">{this.props.id}</span>
          <div className="title">
           <span >{this.props.text}</span>
          </div>
          <button className="status" 
             onClick={() => this.props.statusChange(this.props.id)}>
             {this.props.done ? "完了" :"作業中"}
          </button>
          <button className="delete" onClick={()=> this.props.onDelete(this.props.id)}>削除</button>
        </div>
      </li>
    );
  }

}

export default Todo;