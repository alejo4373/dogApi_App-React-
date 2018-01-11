import React from "react";

const styles = {
  container: {
    height: "10em"
  },
  img: {
    height: "90%"
  }
};

const Dog = ({ imageURL }) => (
  <div style={styles.container}>
    {imageURL ? <img style={styles.img} alt="" src={imageURL} /> : "loading..."}
    <img src='../../Heart.svg' alt='heart animation'/>
  </div>
);

export default Dog;
