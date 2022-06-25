import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import List from './List';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoItem: {list: '', day:'', time:''},
      items: [{}],
      addText: '+'
    }
  }

  handleSubmit = (event) => {
    // event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.todoItem],
      todoItem: {list: '', day:'', time:''},
    })
  }

  handleChange = (event) => {
    let now = new Date();
    let day = now.getDate()+'-'+(now.getMonth()+1)+'-'+now.getFullYear();
    let time = 'Time  ['+now.getHours()+':'+now.getMinutes()+':'+now.getSeconds()+']';
    this.setState({
      todoItem: {list: event.target.value, day:day, time:time},
    });
    console.log(this.state.items);
  }

  handleText = (hover) => {
    if(hover === true){
      this.setState({
        addText:'Add'
      });
    }else{
      this.setState({
        addText:'+'
      });
    }
  }

  render(){
    return (
      <div className='App'>
        <div className='App-header'>
          <h3>To Do List App by I Gede Yuda Aditya</h3>
          <div className='divider'>
            <input className='task-input' value={this.state.todoItem.list} onChange={this.handleChange}/>
            <button className='button-sub' onClick={() => this.handleSubmit()} onMouseOver={()=>{this.handleText(true)}} onMouseOut={()=>{this.handleText(false)}}>{this.state.addText}</button>
          </div>
          <div className='list'>
            <List items={this.state.items}></List>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
