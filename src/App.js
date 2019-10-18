import React, { Component } from 'react';
import './App.css';
import Square from './Square';
import { squares } from './data/squares.json'

class App extends Component {
  state = {
    squaresToRender: []
  }


  shuffleArray = (array)  => {
    this.setState({squaresToRender: array.sort(() => 0.5 - Math.random())});
  }

  componentDidMount(){
    this.shuffleArray(squares);
  }

  render() {
    const { squaresToRender } = this.state;

    return(
      <div className="app">
        <img src={require("./image.png")} alt="logo" />
        {squaresToRender ?
        <div className="square-container">
          { squaresToRender.map((square, index) => {
            if( index === 12 )
              return <div className="square selected">Free Space</div>
                if(index < 25)
              return <Square>{square}</Square>
                return null;
          }) }
        </div>
            :
            <span>loading...</span>
        }
      </div>
    )
  }
}

export default App;
