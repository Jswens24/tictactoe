import { useState } from 'react';
import './App.css';
import Square from './Square';


function App() {
  const [gameSquares, setGameSquares] = useState(['', '', '', '', '', '', '', '', '']);
  const [playerTurn, setPlayerTurn] = useState(true);

  const handleClick = () => {
    setGameSquares(['', '', '', '', '', '', '', '', '']);
    setPlayerTurn(true);
  };

  const calculateWinner = (arr) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
        return `${arr[a]} Won!`
      } else {
      }
    }
    return 'Who will win?'
  }

  return (
    <div className="App">
      <span>{calculateWinner(gameSquares)}</span>
      <br />
      <button onClick={handleClick}>RESET</button>
      <div className='container'>
        {
          gameSquares.map((el, index) => {
            return (
              <Square
                gameSquares={gameSquares}
                setGameSquares={setGameSquares}
                playerTurn={playerTurn}
                setPlayerTurn={setPlayerTurn}
                index={index}
                squareValue={el}
              />
            )
          })
        }
      </div>

    </div>
  );
}

export default App;
