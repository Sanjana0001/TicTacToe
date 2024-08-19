import React, { useState } from "react";
import Square from "./Square";
import '../Board.css'; // Separate CSS file for board-specific styles

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const handleClick = (index) => {
    if (state[index] !== null || checkWinner()) return;

    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) return state[a];
    }
    return false;
  };

  const isWinner = checkWinner();

  const handleReset = () => {
    setState(Array(9).fill(null));
    setIsXTurn(true);
  };

  return (
    <div className="board-wrapper">
      <h3>{isWinner ? `${isWinner} won the game!` : `Next Turn: ${isXTurn ? 'X' : 'O'}`}</h3>
      <div className="board-container">
        {[0, 1, 2].map((row) => (
          <div className="board-row" key={row}>
            {[0, 1, 2].map((col) => (
              <Square
                key={3 * row + col}
                onClick={() => handleClick(3 * row + col)}
                value={state[3 * row + col]}
              />
            ))}
          </div>
        ))}
      </div>
      <button className="reset-button" onClick={handleReset}>
        {isWinner ? "Play Again" : "Reset"}
      </button>
    </div>
  );
};

export default Board;
