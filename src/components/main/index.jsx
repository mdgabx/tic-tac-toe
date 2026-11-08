const { useState } = React;

export function Board() {
  return (

    <div className="container">
      <div className="heading">
          <h1>Tic Tac Toe</h1>
          <p>Next Player: <span></span></p>
      </div>
      <div className="grid-board">
        <button className="square"></button>
        <button className="square"></button>
        <button className="square"></button>
        <button className="square"></button>
        <button className="square"></button>
        <button className="square"></button>
        <button className="square"></button>
        <button className="square"></button>
        <button className="square"></button>
      </div>

      <div className="reset-wrap">
        <button>Reset Game</button>
      </div>
    </div>
  )
}