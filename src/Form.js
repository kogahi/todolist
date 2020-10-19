import React, { Component } from 'react';
import './css/Form.css';

class Form extends Component{
    onChange(e){
        this.setState({value:e.target.value})
    }
    render(){
        return(
            <div className="form">
                <div className="form-title"><h2>新規タスクの追加</h2></div>
                <div className="form_input">
                    <input type="text" value={this.props.value} onChange={ e => this.onChange(e)} />
                    <button onClick={() => this.props.handleSubmit}>
                        追加
                    </button>
                </div>
            </div>
        )
    }
}

export default Form