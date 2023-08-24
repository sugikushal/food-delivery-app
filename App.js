import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React Element</span>;

const HeadingComponent = () => (
  <div id="container">
    <h1 id="title">Namaste React using Functional Component</h1>
  </div>
);

const title = (
  <h1 id="head" tabIndex="3">
    {elem}
    Namaste React using JSX
    <HeadingComponent/>
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(title);
