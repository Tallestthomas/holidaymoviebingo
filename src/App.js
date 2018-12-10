import React, { Component } from 'react';
import './App.css';
import Square from './components/Square';

class App extends Component {
  state = {
    squares:[
      "Anti-Christmas character",
      "Blatant product placement", 
      "Christmas beret",
      "Christmas carolers",
      "Christmas magic",
      "Company holiday party",
      "Cookie baking",
      "Crazy snowstorm that shuts down travel",
      "Christmas tree shopping",
      "Elderly advice ",
      "Ex bf/gf trouble",
      "Fall in love within a week",
      "Family member deceased",
      "Family property or business in trouble",
      "First kiss interrupted",
      "From a small town",
      "Gets dumped in beginning of the movie",
      "Greedy corporate character",
      "Horse drawn carriage ride",
      "Ice skating",
      "Impromptu snowball fight",
      "Incredibly cheesey line that makes you roll your eyes",
      "Jumps to massive conclusion",
      "Main characters don't like each other at first",
      "Ridiculously convenient mistletoe",
      "Santa inspired outfit",
      "Santa-like character",
      "Sleigh ride",
      "Someone with a holiday themed name",
      "Something that clearly wouldn't happen in real life",
      "Special ornament story",
      "Terrible acting",
      "Terribly bad fake CGI snow",
      "Town Christmas festival",
      "Tree decorating",
      "Trying to come clean gets interrupted", 
      "Turning down job for love",
      "Unintentional hand holding",
      "Workaholic",
      "\"Accidental\" fall that requires help up",
      "Drinking hot chocolate",
      "Almost marries obviously wrong person",
      "Extravagent holiday food display",
      "Main characters \"bump into\" each other in the beginning",
    ],
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
    this.shuffleArray(this.state.squares);
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
    return(
      <div className="app">
        <img src={require("./image.png")} alt="logo" />
        <button onClick={() => this.shuffleArray(this.state.squares)}>Click here for new squares</button>
        {this.state.squaresToRender ?
        <div className="square-container">
          { this.state.squaresToRender.map((square, index) => {
            if( index === 12 ){
              return <div key="free" className="square selected">Free Space</div>
            }
            else if(index < 25){
              return <Square key={square} onClick={() => this.selectSquare(index)}>{square}</Square>
            }
            return null;
          }) }
        </div>
            :
            <span>loading...</span>
        }
        <a href="mailto:holiday.bingo@tomrasmussen.me">Have a square suggestion? Send it to us!</a>
      </div>
    )
  }
}

export default App;
