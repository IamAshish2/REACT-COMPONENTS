import { useEffect, useState } from "react";

function Square({ content, onClick, styles }) {
  return (
    <button className={styles} onClick={onClick}>
      {content}
    </button>
  );
}

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [xIsPlaying, setXIsPlaying] = useState(true);
  const [status, setStatus] = useState("");

  function getWinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[z] === squares[x]
      ) {
        return squares[x];
      }
    }
    return null;
  }

  function handleMove(getMoveIndex) {
    let cpyArray = [...squares];
    for (let i = 0; i < squares.length; i++) {
      if (getMoveIndex === i) {
        cpyArray[i] = xIsPlaying ? "X" : "O";
      }
    }
    setXIsPlaying(!xIsPlaying);
    setSquares(cpyArray);
  }

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus(`This is a draw ! Please restart the game`);
    } else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)}. Please restart the game`);
    } else {
      setStatus(`Next player is ${xIsPlaying ? "X" : "O"}`);
    }
  }, [squares, xIsPlaying, status]);

  console.log(squares);

  function restart() {}
  return (
    <div className="flex flex-col justify-center items-center h-96 w-[31rem]  mt-10 m-2">
      <div className="flex border ">
        <Square
          styles={"border h-32 w-32"}
          content={squares[0]}
          onClick={() => {
            handleMove(0);
          }}
        />
        <Square
          styles={"border h-32 w-32"}
          content={squares[1]}
          onClick={() => {
            handleMove(1);
          }}
        />
        <Square
          styles={"border h-32 w-32"}
          content={squares[2]}
          onClick={() => {
            handleMove(2);
          }}
        />
      </div>

      <div className="flex ">
        <Square
          styles={"border h-32 w-32"}
          content={squares[3]}
          onClick={() => {
            handleMove(3);
          }}
        />
        <Square
          styles={"border h-32 w-32"}
          content={squares[4]}
          onClick={() => {
            handleMove(4);
          }}
        />
        <Square
          styles={"border h-32 w-32"}
          content={squares[5]}
          onClick={() => {
            handleMove(5);
          }}
        />
      </div>

      <div className="flex ">
        <Square
          styles={"border h-32 w-32"}
          content={squares[6]}
          onClick={() => {
            handleMove(6);
          }}
        />
        <Square
          styles={"border h-32 w-32"}
          content={squares[7]}
          onClick={() => {
            handleMove(7);
          }}
        />
        <Square
          styles={"border h-32 w-32"}
          content={squares[8]}
          onClick={() => {
            handleMove(8);
          }}
        />
      </div>

      <div>{status}</div>
      <div>
        <button className="border p-1 mt-3 w-24">Restart</button>
      </div>
    </div>
  );
};

export default TicTacToe;
