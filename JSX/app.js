import React from "react";
import ReactDOM from "react-dom/client";

// react element
const element = (
  <h1 className="Main" tabIndex="1">Namaste Raact using JSX element</h1>
);

// react component
const Element2 = () => (
  <h1 className="Main" tabIndex="1">Namaste Raact using JSX component</h1>
);

// const function = () => {
//   return <h1 className="prac">Namaste react functional component</h1>;
// }; 

const Function2 = () => (
  <div id="container">
    < Element2 />
    <h1 className="heading">Namaste react functional component</h1>
  </div>
); 

// both are same but with different syntax

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Function2 />);