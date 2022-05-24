import React, { Component } from 'react';

import {Button} from './Button';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      johnnyCount: 1
     , amberCount: 1
    }

  }

  handleCount(value) {

alert ("johnny");
          this.setState((prevState) => ({ johnnyCount: prevState.johnnyCount + value }));
  }

  handleCount2(value) {
alert("amber");
          this.setState((prevState) => ({ amberCount: prevState.amberCount + value }));
  }

  render() {


    return (
      <div>
        Votes for Johnny: {this.state.johnnyCount}
        Votes for Amber: {this.state.amberCount}
        <hr />
        <Button sign="johnny" count={this.state.johnnyCount} updateCount={this.handleCount.bind(this)} />
        <Button sign="amber" count={this.state.amberCount} updateCount2={this.handleCount2.bind(this)} />
      </div>
    );
  }
}

