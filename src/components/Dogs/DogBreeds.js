import React from "react";
import { Route, Switch } from "react-router-dom";

import dogAPI from "../../api/dogAPI";

import DogBreedList from "./DogBreedList";
import RandomDogWithBreed from "./RandomDogWithBreed";

class DogBreeds extends React.Component {
  constructor() {
    super();
    this.state = {
      breeds: []
    };
    this.allBreeds = []
  }

   componentDidMount() {
     dogAPI.getMasterBreeds().then(response => {
       const breeds = response.data.message
       this.allBreeds = breeds;
       this.setState({
         breeds: breeds
       })
     });
   }
  
 getDogBreeds = () => {
    dogAPI.getMasterBreeds().then(response => {
      this.setState({ breeds: response.data.message });
    });
  };

  filterBreeds = (e) => {
    console.log('trying to filter breeds')
    this.setState({
      breeds: this.allBreeds.filter(breed => breed.includes(e.target.value))
    }) 
  }

  renderBreeds = () => {
    const { breeds } = this.state;

    return (
      <div>
        <h2> Master Breeds </h2>
        <input type='text' name='breed' onChange={this.filterBreeds}/>
        <DogBreedList breeds={breeds} />
      </div>
    );
  };

  renderDogWithBreed = props => {
    const { breed } = props.match.params;
    return <RandomDogWithBreed breed={breed} />;
  };

  render() {
    return (
      <Switch>
        <Route exact path="/dogs/breeds" render={this.renderBreeds} />
        <Route path="/dogs/breeds/:breed" render={this.renderDogWithBreed} />
      </Switch>
    );
  }
}

export default DogBreeds;
