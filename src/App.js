import React, { Component } from "react";
import Square from "./components/Square";
import { squares } from "./data/squares.json";
import "./App.css";

class App extends Component {
  state = {
    squaresToRender: [],
  };

  shuffleArray = (array) => {
    this.setState({ squaresToRender: array.sort(() => 0.5 - Math.random()) });
  };

  componentDidMount() {
    this.shuffleArray(squares);
  }

  render() {
    const { squaresToRender } = this.state;

    return (
      <div className="app">
        <img src={require("./assets/image.jpeg")} alt="logo" />
        {squaresToRender ? (
          <div className="square-container">
            {squaresToRender.map((square, index) => {
              if (index === 12)
                return <div className="square selected">Terrible Acting</div>;
              if (index < 25) return <Square>{square}</Square>;
              return null;
            })}
          </div>
        ) : (
          <span>loading...</span>
        )}
      </div>
    );
  }
}

export default App;
