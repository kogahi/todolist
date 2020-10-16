import React, { Component } from 'react';
import './css/Form.css';

class Form extends Component{
    render(){
        return(
            <div className="form">
                <div className="form-title"><h2>新規タスクの追加</h2></div>
                 <form onSubmit={this.props.handleSubmit}>
                    <input name="title"/>
                    <button type="submit" className="add">追加</button>
                </form>
            </div>
        )
    }
}

export default Form