import React, { Component } from 'react';
import './css/Todo.css';

class Todo extends Component {
  // handleDelete(e){
  //   this.state.todo.splice(e.target.id,1);
  // }
  handleClickDelete= (e) => {
     e.preventDefault();
     this.props.onDelete(e);
  }

  render() {
    const link = this.props.done ? '元に戻す' : '完了！'
    return(
      <li>
        <div className="list">
        <span classname="id">{this.props.id}</span>
        <div className="title">
         <span >{this.props.title}</span>
        </div>
        <button className="status">作業中</button>
        <button className="delete" onClick={this.props.onDelete}>削除</button>
        </div>
      </li>
    );
  }

}

export default Todo;