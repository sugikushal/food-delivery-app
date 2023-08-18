import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div", {id: "parent"},
    [React.createElement(
        "div", {id: "child1"}, 
        [React.createElement(
            "h1", {id: "heading"}, "Hello hello"
        ), React.createElement(
            "h2", {id: "heading2"}, "Hello hello2"
        )]
    ), React.createElement(
        "div", {id: "child2"}, 
        [React.createElement(
            "h1", {id: "heading11"}, "Hello hello"
        ), React.createElement(
            "h2", {id: "heading12"}, "Hello hello2"
        )]
    )]
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);