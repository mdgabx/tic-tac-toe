const { useState } = React;

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function calculateWinner(squares) {
  for (const [a, b, c] of winningPatterns) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setToX] = useState(true);

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every((square) => square !== null);

  const handlePlay = (index) => {
    if (squares[index] !== null || winner) return;

    const nextSquares = [...squares];
    nextSquares[index] = isX ? "X" : "O";

    setSquares(nextSquares);
    setToX(!isX);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setToX(true);
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>Tic Tac Toe</h1>
        <p>
          Next Player: <span>{isX ? "X" : "O"}</span>
        </p>
        {winner && <p id="result">Winner: {winner}</p>}
        {isDraw && <p id="result">Draw</p>}
      </div>
      <div className="grid-board">
        {squares.map((square, index) => (
          <button
            key={index}
            className="square"
            onClick={() => handlePlay(index)}
          >
            {square}
          </button>
        ))}
      </div>

      <div className="reset-wrap">
        <button id="reset" onClick={handleReset}>
          Reset Game
        </button>
      </div>
    </div>
  );
}