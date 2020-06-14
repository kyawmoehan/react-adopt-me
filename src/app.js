const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};
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
ReactDOM.render(React.createElement(App), document.getElementById("root"));
