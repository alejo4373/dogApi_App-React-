import React from "react";
import { Route, Switch } from "react-router-dom";

import RandomDog from "./RandomDog";
import DogBreeds from "./DogBreeds";

class Dogs extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/dogs/breeds" component={DogBreeds} />
          <Route path="/dogs/random" component={RandomDog} />
        </Switch>
      </div>
    );
  }
}

export default Dogs;
