import React, { Component } from 'react';
import './App.css';
import Square from './Square';

class App extends Component {
  state = {
    squares:[
      "First kiss interrupted.",
      "Fall in love within a week", "Horse drawn carriage ride.",
      "Sleigh Ride",
      "Gets dumped in beginning of the movie.",
      "Town Christmas festival",
      "Company holiday party",
      "Family Member Deceased",
      "Greedy corporate character.",
      "Cookie baking.",
      "Christmas ghost.",
      "Blatant product placement.", 
      "Someone with a holiday themed name",
      "\"Accidental\" fall that requires help up",
      "Terribly bad fake CGI snow.",
      "Workaholic.",
      "Works at marketing agency",
      "Works at design firm",
      "Main characters don't like each other at first.",
      "Christmas Carolers.",
      "Crazy snowstorm that shuts down travel",
      "Something that clearly wouldn't happen in real life.",
      "Incredibly cheesey line that makes you roll your eyes.",
      "Ridiculously convenient mistletoe.",
      "Trying to come clean gets interrupted", 
      "Santa inspired outfit.",
      "Unintentional hand holding",
      "Jumps to massive conclusion",
      "Santa-like character",
      "Christmas Beret",
      "Impromptu snowball fight",
      "Elderly advice ",
      "Turning down job for love",
      "Ice Skating",
      "Terrible Acting",
      "Special Ornament Story",
      "Cutting down a Christmas Tree",
      "Tree Decorating",
      "From a small town",
      "Anti-Christmas Character",
      "Ex bf/gf trouble",
      "Family property or business in trouble",
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
