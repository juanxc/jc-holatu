import React, { Component } from 'react';

class NameButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'mateo'
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.reset = this.reset.bind(this);
  }
  clickHandler(event){
    this.props.onChange(event.target.innerHTML);
  }
  reset(){
    this.props.onReset();
  }
  render(){
    return (
      <div>
        <button onClick={this.clickHandler}>Edgar</button>
        <button onClick={this.reset}>Reiniciar</button>
      </div>
    );
  }
}

export default NameButton;
