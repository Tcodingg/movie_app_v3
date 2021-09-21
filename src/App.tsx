import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar/SearchBar";

import Home from "./components/Home/Home";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <SearchBar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
