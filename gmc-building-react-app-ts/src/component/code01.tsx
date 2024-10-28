import React from "react";

// Define an interface for the props that the Greeting component will receive
interface greetingProps {
  name: string;
}

// Type the Greeting component to accept props of type GreetingProps
const Greeting: React.FC<greetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};
export default Greeting;
2;
