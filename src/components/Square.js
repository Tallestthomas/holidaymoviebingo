import React, {useState} from 'react';

const Square = ({ children }) => {
  const [selected, setSelected] = useState(false);

  return(
    <div className={`square ${selected ? 'selected' : ''}`}
      onClick={ () => { setSelected(!selected) }}>
      { children }
    </div>
  );
}

export default Square;
