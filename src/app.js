import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

// app is component & stamp
const App = () => {
  return React.createElement(
    // tag
    "div",
    // attribuet
    { id: "helllo" },
    // child
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Blacky",
        animal: "dog",
        breed: "Myamar",
      }),
      React.createElement(Pet, {
        name: "Kitty",
        animal: "cat",
        breed: "Ruusian",
      }),
      React.createElement(Pet, {
        name: "Ma Kha",
        animal: "bird",
        breed: "Ta La Kha",
      }),
    ]
  );
};

render(React.createElement(App), document.getElementById("root"));
