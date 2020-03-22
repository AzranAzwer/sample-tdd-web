import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  render() {
    return (
      <div testID="component-app">
        <h1 testID="counter-display">
          The cointer is currently {this.state.counter}
        </h1>
        <button
          testID="increment-button"
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Increment Counter
        </button>
        <button
          testID="decrement-button"
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
          Decrement Counter
        </button>
      </div>
    );
  }
}

export default App;
