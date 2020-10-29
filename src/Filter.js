import React, { Component } from 'react';
// import './css/Filter.css';

class Filter extends Component{
    render(){
        return(
            <div className="filter">
              <form onSubmit={this.props.handleChangeFilter}>
                <input type="radio" id="all" name="all" value="all" 
                checked={this.props.filter==="all"} onChange={this.props.changeRadio}/>
                <label for="all">すべて</label>
                <input type="radio" id="uncompleted" name="uncompleted" value="uncompleted"
                checked={this.props.filter==="uncompleted"} onChange={this.props.changeRadio}/>
                <label for="uncompleted">作業中</label>
                <input type="radio" id="completed" name="completed" value="completed"
                checked={this.props.filter==="completed"} onChange={this.props.changeRadio}/>
                <label for="completed">完了</label>
              </form>
            </div>
        )
    }
}

export default Filter