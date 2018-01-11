import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Dogs from "./Dogs/Dogs";

const App = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      {"  "}
      <Link to="/dogs/breeds">Dog Breeds</Link>
      {"  "}
      <Link to="/dogs/random">Random Dog</Link>
      {"  "}
    </nav>

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dogs" component={Dogs} />
    </Switch>
  </div>
);

export default App;
