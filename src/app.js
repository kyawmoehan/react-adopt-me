import React, { lazy, Suspense } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import NavBar from "./NavBar";
import SearchParams from "./SearchParams";
// import ThemeContext from "./ThemeContext";
import NotFoundPage from "./NotFoundPage";
import store from "./store";

const Details = lazy(() => import("./Details"));

// app is component & stamp
const App = () => {
  // const themeHook = useState("darkblue");
  return (
    <React.StrictMode>
      {/* <ThemeContext.Provider value={themeHook}> */}
      <Provider store={store}>
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
      </Provider>
      {/* </ThemeContext.Provider> */}
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
