import React, { Component } from 'react';

// Define the type for state
interface CounterState {
  count: number;
}

// No props are used, so we define it as an empty object
interface CounterProps {}

// Class component with generic types for props and state
class Counter extends Component<CounterProps, CounterState> {
  // Define initial state with type safety
  state: CounterState = {
    count: 0
  };

  // Method to increment the count
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Render method returning JSX
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
