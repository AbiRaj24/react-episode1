// const heading=  React.createElement("h1",{id:"heading"},"hello react from CDN");

//       const root=ReactDOM.createRoot(document.getElementById("root"));
//       root.render(heading);

const parent =React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},[React.createElement("h1",{id:"child1"},"child1"),React.createElement("h2",{id:"child2"},"child2")]),
React.createElement("div",{id:"child"},[React.createElement("h1",{id:"child1"},"child1"),React.createElement("h2",{id:"child2"},"child2")])]
) 
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
console.log(parent);
