import React from "react";
import ReactDOM from "react-dom/client";

// react element
const element = (
  <h1 className="Main" tabIndex="1">Namaste React using JSX element</h1>
);

// react component
const Element2 = () => (
  <h1 className="Main" tabIndex="1">Namaste React using JSX component</h1>
);

// react component converted into normal javascript function
const Element3 = function () { 
  return (
  <h1 className="Main" tabIndex="1">Namaste Raact using JSX component</h1>
)
};

const Function = () => {
  return <h1 className="prac">Namaste react functional component</h1>;
}; 

// componenet composition
const Function2 = () => (
  <div id="container">
    < Element2 /> 
    <h1 className="heading">Namaste react functional component</h1>
  </div>
); 

// both are same but with different syntax

{element}
{Element2}
// can combine any combination like element inside element , 
// component inside component and element inside component and vice verse
// you can also call component with
< Function2 />

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Function2 />);