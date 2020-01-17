import React, { Component } from 'react';
import {Display} from './components/Display';
import {strike, ball, foul, hit} from './components/util/functions';


import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      balls: 0,
      strikes: 0
    }
  }

  componentDidUpdate(){
    if(this.state.strikes >= 3){
    this.setState({strikes:0, balls:0})
    }
    if(this.state.balls >= 4){
      this.setState({strikes:0, balls:0})
    }
    return
  }

  render(){

    return(
      <div>
        <Display hit={() => this.setState(hit)} foul={() => this.setState(foul)} strike={() => this.setState(strike)} ball={() => this.setState(ball)} state={this.state} />
      </div>
    )
  }
   
}

export default App;
