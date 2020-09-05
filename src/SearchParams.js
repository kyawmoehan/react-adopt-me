import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import { connect } from "react-redux";
import useDropdown from "./UseDropdown";
import Results from "./Results";
// import ThemeContext from "./ThemeContext";
// import ErrorBoundary from "./ErrorBoundary";
import changeLocation from "./actionCreators/ChangeLoaction";
import changeTheme from "./actionCreators/ChangeTheme";

const SearchParams = (props) => {
  // const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreddDropdown, setBreed] = useDropdown("Breeds", "", breeds);
  const [pets, setPets] = useState([]);
  // const [theme, setTheme] = useContext(ThemeContext);

  async function requestPets() {
    const { animals } = await pet.animals({
      location: props.location,
      breed,
      type: animal,
    });
    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");
    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedStrings = apiBreeds.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="laction">Location</label>
        <input
          type="text"
          id="location"
          value={props.location}
          placeholder="Location"
          onChange={(e) => props.updateLoaction(e.target.value)}
        />
        <AnimalDropdown />
        <BreddDropdown />
        <label htmlFor="theme">Theme</label>
        <select
          name=""
          id="theme"
          value={props.theme}
          onChange={(e) => props.setTheme(e.target.value)}
          onBlur={(e) => props.setTheme(e.target.value)}
        >
          <option value="peru">Peru</option>
          <option value="darkblue">DrkBlue</option>
          <option value="mediumorchid">Medium Orchid</option>
          <option value="chartreuse">Chartreuse</option>
        </select>
        <button type="submit" style={{ backgroundColor: props.theme }}>
          Submit
        </button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

const mapStatToProps = ({ theme, location }) => ({
  theme,
  location,
});

const mapDispatchToProps = (dispatch) => ({
  setTheme: (theme) => dispatch(changeTheme(theme)),
  updateLoaction: (location) => dispatch(changeLocation(location)),
});

// export default function SearchParamsWithErrorBoundary() {
//   return (
//     <ErrorBoundary>
//       <SearchParams />
//     </ErrorBoundary>
//   );
// }

export default connect(mapStatToProps, mapDispatchToProps)(SearchParams);
