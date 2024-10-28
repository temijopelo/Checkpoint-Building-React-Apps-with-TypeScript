import React, { Component, ReactNode } from "react";

// Define the type for the Counter's state
interface ComponentProps {
  count: number;
}

// Define the Counter component with props as an empty object {} and state as ComponentProps
class Counter extends Component<{}, ComponentProps> {
  // Initialize the state with a count property
  state: ComponentProps = {
    count: 0,
  };

  // Define the increment method, ensuring it returns void
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  // Ensure the render method returns a valid ReactNode (TSX)
  render(): ReactNode {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
export default Counter;
