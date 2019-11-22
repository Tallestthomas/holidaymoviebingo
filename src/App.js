import React, { Component } from 'react';
import Square from './components/Square';
import { squares } from './data/squares.json';

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
<<<<<<< HEAD
        <img src={require("./image.png")} alt="logo" />
=======
        <img src={require("./assets/image.png")} alt="logo" />
>>>>>>> b6adba06182105f942a93934f643357acefa8a7e
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
