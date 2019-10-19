import React, { Component } from 'react';
import './App.css';
import Square from './components/Square';
import { squares } from './data/squares.json';

class App extends Component {
  state = {
    squaresToRender: [],
    selectedSquares: [12],
    winCons: [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24],
      [0, 6, 12, 18, 24],
      [4, 8, 12, 16, 20],
      [0, 5, 10, 15, 20],
      [1, 6, 11, 16, 21],
      [2, 7, 12, 17, 22],
      [3, 8, 13, 18, 23],
      [4, 9, 14, 19, 24]
    ],
    winner: false
  }

  shuffleArray = (array)  => {
    this.setState({squaresToRender: array.sort(() => 0.5 - Math.random())});
  }

  sanitizeArray = (array)  => Array.from(new Set(array))

  selectSquare = (index) => {
    const array = this.state.selectedSquares;
    const indexOfSquare = array.indexOf(index);
    if(indexOfSquare === -1){
      array.push(index);
      this.setState({...this.state.selectedSquares, selectedSquares: array})
    } else {
      this.setState({selectedSquares: this.state.selectedSquares.filter((_, i) => i !== indexOfSquare)});
    }
    this.checkForWin();
  }

  componentDidMount(){
    this.shuffleArray(squares);
  }

  checkForWin = () => {
    const res = this.state.winCons.filter(v => v.filter(c => {
      return this.state.selectedSquares.indexOf(c) > -1
    }).length === 5)
    if(res.length === 1){
      this.setState({winner: true})
    }
  }

  render() {
    const { squaresToRender } = this.state;

    return(
      <div className="app">
        <img src={require("./assets/image.png")} alt="logo" />
        {squaresToRender ?
        <div className="square-container">
          { squaresToRender.map((square, index) => {
            if( index === 12 )
              return <div className="square selected">Free Space</div>
            if(index < 25)
              return <Square onClick={() => this.selectSquare(index)} >{square}</Square>
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
