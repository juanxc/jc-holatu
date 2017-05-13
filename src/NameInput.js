import React, { Component } from 'react';

class NameInput extends Component{
  constructor(props){
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
  }
  changeHandler(event){
    this.props.onChange(event.target.value);
  }
  render(){
    return (
      <input type="text" placeholder="your name"
        onChange={this.changeHandler}
        value={this.props.name}
      />
    );
  }
}

export default NameInput;
