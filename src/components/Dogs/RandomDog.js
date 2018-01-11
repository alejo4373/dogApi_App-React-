import React from "react";
import dogAPI from "../../api/dogAPI";
import Dog from "./Dog";

class RandomDog extends React.Component {
  constructor() {
    super();
    this.state = {
      imageURL: ""
    };
  }

  getPicture = () => {
    this.setState({ imageURL: "" });
    dogAPI.getRandomDog().then(response => {
      this.setState({ imageURL: response.data.message });
    });
  };

  componentWillReceiveProps() {
    this.getPicture();
  }

  componentDidMount() {
    this.getPicture();
  }

  render() {
    const { imageURL } = this.state;

    return (
      <div>
        <h2> Random Dog Picture </h2>
        <Dog imageURL={imageURL} />
        <button onClick={this.getPicture}> One More </button>
      </div>
    );
  }
}

export default RandomDog;
