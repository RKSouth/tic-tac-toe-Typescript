import { useEffect, useState } from 'react';
import Square from '../components/Square';


type Player = 'x' | 'o' | null | 'Both!';

function calculateWinner(squares: Player[]) {
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let i = 0;i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if ( 
            squares[a] && 
            squares[a] === squares[b] && 
            squares[a] === squares[c]
            ) {     
                return squares[a]
            }
    }
    return null
}

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [currentPlayer, setCurrentPlayer] = useState<'x' | 'o'>(
        Math.round(Math.random() * 1) === 1 ? 'x' : 'o'
    )
    const [winner, setWinner] = useState<Player>(null)
    
    function reset(){
        setSquares(Array(9).fill(null));
        setWinner(null);
        setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? 'x' : 'o');
    }

    function setSquareValue(index: number) {
        const newData = squares.map((val, i) => {
            if(i === index) {
                return currentPlayer
            }
            return val;
        })
        setSquares(newData);
        setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x')
    }
    
    useEffect(() => {
        const w = calculateWinner(squares)
        if(w){
            setWinner(w)
        }
        // if we have any squares that don't have a current player in it
        if(!w && !squares.filter((square) => !square).length){
            setWinner('Both!')
        }
    })
    
    return (
        <div>
            {!winner &&<p>Hey {currentPlayer}, it's your turn</p>}
            {winner && winner !=='Both!'&& <p>Congratulations {winner}</p>}
            {winner && winner === 'Both!' && (
            <p>Congratulations you are both winners!</p>
            )}
           <div className='grid'>
            {Array(9).fill(null).map((_, i) => {
                return <Square 
                    winner = {winner}
                    key={i}
                    onClick={() => setSquareValue(i)}
                    value={squares[i]}
                />
            })}
            </div>
            <button className='reset' onClick={reset}>Reset</button>
        </div>
    )
}
export default Board