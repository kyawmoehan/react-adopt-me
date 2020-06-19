import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

// app is component & stamp
const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <Pet name="Blacky" animal="dog" breed="Myanmar" />
      <Pet name="Kitty" animal="cat" breed="Russion" />
      <Pet name="Ma Kha" animal="bird" breed="Ta La Kha" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
