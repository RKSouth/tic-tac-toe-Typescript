import { useState } from 'react';

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [currentPlayer, setCurrentPlayer] = useState<'x' | 'o'>(
        Math.round(Math.random() *1) ===1 ? 'x' : 'o'
    )
    const [winner, setWinner] = useState(null)
    return (
    <div>
        <p>Hey {currentPlayer}, it's your turn</p>
        the board
        </div>
        )
}
export default Board