import React from "react";

const NewCard = ({ onClick }) => (
  <>
    <button onClick={() => onClick()}>Get new card</button>
  </>
);

export default NewCard;
