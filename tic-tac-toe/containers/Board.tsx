import { useState } from 'react';
import Square from '../components/Square';

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [currentPlayer, setCurrentPlayer] = useState<'x' | 'o'>(
        Math.round(Math.random() * 1) === 1 ? 'x' : 'o'
    )
    const [winner, setWinner] = useState(null)
    
    function setSquareValue(index) {
        const newData = squares.map((val, i) => {
            if(i === index) {
                return currentPlayer
            }
            return val;
        })
        setSquares(newData);
        setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x')
    }
    
    
    return (
        <div>
            <p>Hey {currentPlayer}, it's your turn</p>
            {Array(9).fill(null).map((_, i) => {
                return <Square 
                    winner = {winner}
                    key={i}
                    onClick={() => setSquareValue(i)}
                    value={squares[i]}
                />
            })}
        </div>
    )
}
export default Board