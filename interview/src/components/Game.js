import React, { useState } from "react";
import Board from "./Board";

function Game() {
  const [position, setPosition] = useState(Array(9).fill(null));

  const handleClick = () => {};

  return (
    <div>
      <Board squares={position} onClick={handleClick} />
    </div>
  );
}

export default Game;
