import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar/SearchBar";
import Details from "./components/Details/Details";

import Home from "./components/Home/Home";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <SearchBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details/:id" component={Details} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
