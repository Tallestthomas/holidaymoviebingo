import React from 'react';

class Square extends React.Component {
  state = {
    selected: false
  }

  render() {
    return(
      <div className={`square ${this.state.selected ? 'selected' : ''}`}
        onClick={() => {
          this.props.onClick(); 
          this.setState({selected: !this.state.selected});
        }}
      >
        {this.props.children}
      </div>
    )
  }
}

export default Square;
