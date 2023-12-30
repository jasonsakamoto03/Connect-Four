import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  let gameBoard = [[null, null, null, null, null, null, null],
                   [null, null, null, null, null, null, null],
                   [null, null, null, null, null, null, null],
                   [null, null, null, null, null, null, null],
                   [null, null, null, null, null, null, null],
                   [null, null, null, null, null, null, null]]
  const [squares, setSquares] = useState(gameBoard);
  const [xIsNext, setXIsNext] = useState(true);
  let instructions = "Choose a valid column";
  let warning;

  function handleClick(i) {
    if (squares[0][i] || calculateWinner(squares)) {
      warning = "Invalid column! Please try again.";
      return;
    }
    const nextSquares = squares.slice();
    let row = 5;
    while (squares[row][i] !== null && row != -1) {
      row--;
    }
    if (xIsNext) {
      nextSquares[row][i] = "X";
    } else {
      nextSquares[row][i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = (xIsNext ? "X" : "O") + "'s turn. Please select a valid column.";
  }

  return (
    <>
      <div className="instructions">{warning}</div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0][0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[0][1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[0][2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[0][3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[0][4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[0][5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[0][6]} onSquareClick={() => handleClick(6)} />
      </div>
      <div className="board-row">
        <Square value={squares[1][0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1][1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[1][2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[1][3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[1][4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[1][5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[1][6]} onSquareClick={() => handleClick(6)} />
      </div>
      <div className="board-row">
        <Square value={squares[2][0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[2][1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2][2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[2][3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[2][4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[2][5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[2][6]} onSquareClick={() => handleClick(6)} />
      </div>
      <div className="board-row">
        <Square value={squares[3][0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[3][1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[3][2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3][3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[3][4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[3][5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[3][6]} onSquareClick={() => handleClick(6)} />
      </div>
      <div className="board-row">
        <Square value={squares[4][0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[4][1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[4][2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[4][3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4][4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[4][5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[4][6]} onSquareClick={() => handleClick(6)} />
      </div>
      <div className="board-row">
        <Square value={squares[5][0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[5][1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[5][2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[5][3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[5][4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5][5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[5][6]} onSquareClick={() => handleClick(6)} />
      </div>
    </>
  )
}

function calculateWinner(squares) {
  // Update check lengths as board expands
  // Check row

  for (let row = 0; row < squares.length; row++) {
    for (let col = 0; col < squares[0].length - 3; col++) {
      if (squares[row][col] === squares[row][col + 1] && squares[row][col + 1] ===
        squares[row][col + 2] && squares[row][col + 2] === squares[row][col + 3]
        && squares[row][col] !== null) {
          return squares[row][col];
        }
    }
  }

  // Check column

  for (let row = 0; row < squares.length - 3; row++) {
    for (let col = 0; col < squares[0].length; col++) {
      if (squares[row][col] == squares[row + 1][col] && squares[row + 1][col] == 
        squares[row + 2][col] && squares[row + 2][col] == squares[row + 3][col]
        && squares[row][col] !== null) {
          return squares[row][col];
        }
    }
  }

  // Check down diagonal

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 4; col++) {
        if (squares[row][col] == squares[row + 1][col + 1] && squares[row + 1][col + 1] ==
            squares[row + 2][col + 2] && squares[row + 2][col + 2] == 
            squares[row + 3][col + 3] && squares[row][col] !== null) {
              return squares[row][col];
            }
    }
}

  // Check up diagonal

  for (let row = 3; row < 6; row++) {
    for (let col = 0; col < 3; col++) {
        if (squares[row][col] == squares[row - 1][col + 1] && squares[row - 1][col + 1] == 
            squares[row - 2][col + 2] && squares[row - 2][col + 2] 
            == squares[row - 3][col + 3] && squares[row][col] !== null) {
                return squares[row][col];
            }
    }
}

// Tie check

for (let i = 0; i < squares.length; i++) {
  for (let j = 0; j < squares[i].length; j++) {
      if (squares[i][j] == null) {
          return null;
      }
  }
}


  return "Tie";
}
