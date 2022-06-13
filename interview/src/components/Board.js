import React from "react";
import Square from "./Square";

function Board({ squares, onClick }) {
    console.log(squares)

 

  return (
    <div className="board">
      {squares.map((el, i) => ( <Square key={i} value={el}  onClick={onClick(i)}/>)
        
      )}
    </div>
  );
}

export default Board;
