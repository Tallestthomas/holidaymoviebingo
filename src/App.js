import React, { Component } from 'react';
import './App.css';
import Square from './Square';

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
    squaresToRender: []
  }


  shuffleArray = (array)  => {
    this.setState({squaresToRender: array.sort(() => 0.5 - Math.random())});
  }

  sanitizeArray = (array)  => Array.from(new Set(array))


  componentDidMount(){
    this.shuffleArray(this.state.squares);
  }

  render() {
    return(
      <div className="app">
        <img src={require("./image.png")} alt="logo" />
        {this.state.squaresToRender ?
        <div className="square-container">
          { this.state.squaresToRender.map((square, index) => {
            if( index === 12 )
              return <div className="square selected">Free Space</div>
                if(index < 25)
              return <Square>{square}</Square>
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
