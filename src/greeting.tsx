// Importing React
import React from 'react';

// Define the props type interface
interface GreetingProps {
  name: string; // The 'name' prop must be a string
}

// Functional component using TypeScript with typed props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
