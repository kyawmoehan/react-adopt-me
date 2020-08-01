import React, { useState, lazy, Suspense } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import NavBar from "./NavBar";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";
import NotFoundPage from "./NotFoundPage";

const Details = lazy(() => import("./Details"));

// app is component & stamp
const App = () => {
  const themeHook = useState("darkblue");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <NavBar />
          <Suspense fallback={<h1>Loading Route...</h1>}>
            <Router>
              <SearchParams path="/" />
              <Details path="/details/:id" />
              <NotFoundPage path="*" />
            </Router>
          </Suspense>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
