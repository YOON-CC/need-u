import Home from './component/home_structure/home.js'
import Board from './component/board_structure/board.js'
import Mypage from './component/mypage_structure/mypage.js'
import store from './home_store.js'
import './App.css';
import React, { Component, useState } from "react";


export default class App extends Component{

    state = {number:store.getState().number} 

    constructor(props){ 
      super(props);
      store.subscribe(function(){ // subscribe는 store가 변할때 마다 호출이 된다.
          this.setState({number:store.getState().number});
      }.bind(this));
    }

    render() { 
    return (
      <div className="App">

        {this.state.number !== 5 && this.state.number !== 6 && <Home></Home>}
        {this.state.number === 5 && <Board></Board>}    
        {this.state.number === 6 && <Mypage></Mypage>}             
      </div>
    );
  }
}

