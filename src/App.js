import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameInput from './NameInput';
import HelloTwo from './HelloTwo';
import NameButton from './NameButton';

/*const Hello = function(){
  return (
    <h2>hola brother!</h2>
  );
}*/

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      counter: 0
    }
    this.CambiarHandler = this.CambiarHandler.bind(this);
    this.reset = this.reset.bind(this);
  }
  CambiarHandler(events){
    console.log(events);
    this.setState((prevState, props) => ({
      name: events,
      counter: prevState.counter + 1
    }));
  }
  reset(event){
    this.setState({
      name: '',
      counter: 0
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React - World</h2>
        </div>
        <div className="App-intro">
          <NameButton onChange={this.CambiarHandler} onReset={this.reset}/>
          <NameInput name={this.state.name} onChange={this.CambiarHandler} />
          <HelloTwo name={this.state.name}/>
          <div>
            counter: {this.state.counter}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
