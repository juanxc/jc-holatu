import React, { Component } from 'react';

class HelloTwo extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'mateo'
    };
  }
  render(){
    return (
      <div>

        <h2>hi {this.props.name}</h2>
      </div>
    );
  }
}

export default HelloTwo;
