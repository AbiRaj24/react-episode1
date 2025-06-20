// const heading=  React.createElement("h1",{id:"heading"},"hello react from CDN");

//       const root=ReactDOM.createRoot(document.getElementById("root"));
//       root.render(heading);

import React from "react";
import ReactDOM from "react-dom/client";

//jsx=> transpiled into react.createElement =>reactElement object =>htmlelemtent (render)

//react Element
const jsxheading = (
  <h1 id="heading" className="head" tabIndex="5">
    abinaya govindarajan
  </h1>
);

// functional component
const HeadingComponent = () => {
  return <h1>hai this is functional component</h1>;
};

// this is also functional component
const HeadingComponent2 = () => <h1>this is also the functional component</h1>;


//component composition means component into another component

const Title=()=>{
 return (<div className="heading">
    <h1>React episode3</h1>
  </div>)
};
const HeaderComponent=()=>{
 return <div className="main-container">
    <Title/>
    <h2> powered by Abinaya</h2>
  </div>
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);
