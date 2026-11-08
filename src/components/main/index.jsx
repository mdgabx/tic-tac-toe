const { useState } = React;

export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isX, setToX] = useState(true);

  const handlePlay = (index) => {
    console.log('click', index)
    const nextSquares = [...squares];
    nextSquares[index] = "X";

    setSquares(nextSquares)
  };

  return (

    <div className="container">
      <div className="heading">
          <h1>Tic Tac Toe</h1>
          <p>Next Player: <span></span></p>
      </div>
      <div className="grid-board">
        {
          squares.map((square, index) => (
            <button 
            key={`${square}-${index}`} className="square"
            onClick={() => handlePlay(index)}
            >
            {square}
            </button>
          ))
        }
      </div>

      <div className="reset-wrap">
        <button>Reset Game</button>
      </div>
    </div>
  )
}