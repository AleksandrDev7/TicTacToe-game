import FieldButton from "../FieldButton";
import './style.scss';
import {useState} from "react";
const axios = require('axios');

function GameField({savedNameOne, savedNameTwo, ShowData}) {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(
        Array(9).fill(null)
    );

    const [winnerResult, setWinnerResult] = useState(null);

    const handleSaveResult = async () => {
        try {
            const response = await axios.post('http://localhost:3001/api/save-result', {
                savedNameOne,
                savedNameTwo,
                winnerResult: winnerResult || 'Ничья',
                date: new Date().toISOString(),
            });
            console.log('Результат сохранён!', response.data);
        } catch (error) {
            console.error('Ошибка:', error);
        }
    };


    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }

        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    function calculateWinner(squares) {
        const combinationWinner = [
            [0,1,2],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [3,4,5],
            [6,7,8],
            [0,4,8],
            [6,4,2],
        ];

        for (let i = 0; i < combinationWinner.length; i++) {
            const [a, b, c] = combinationWinner[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }

        return null;
    }

    const winner = calculateWinner(squares);
    let status;
    let winnerName;
    let saveResults;
    if (winner) {
        if (winner === 'X') {
            winnerName = savedNameOne || 'X';
            status = `Победитель - ${winnerName}`;
        } else if (winner === 'O') {  // Заменил '0' на 'O'
            winnerName = savedNameTwo || 'O';
            status = `Победитель - ${winnerName}`;
        } else {
            status = 'Ничья!';
        }
    } else if (savedNameOne && savedNameTwo) {
        status = ShowData &&`Следующий ход: ${xIsNext ? savedNameOne : savedNameTwo}`;
    } else if (winner === ( 'X' || 'O')) {
        saveResults =`<button onClick={handleSaveResult}>
            Сохранить результат
        </button>`
    }

    const resetGame = () => {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    };

    return (
        <section>
            <div className='table'>
                <div className='table-row'>
                    <FieldButton
                        value={squares[0]}
                        onSquaresClick={() => handleClick(0)}
                    />
                    <FieldButton
                        value={squares[1]}
                        onSquaresClick={() => handleClick(1)}
                    />
                    <FieldButton
                        value={squares[2]}
                        onSquaresClick={() => handleClick(2)}
                    />
                </div>
                <div className='table-row'>
                    <FieldButton
                        value={squares[3]}
                        onSquaresClick={() => handleClick(3)}
                    />
                    <FieldButton
                        value={squares[4]}
                        onSquaresClick={() => handleClick(4)}
                    />
                    <FieldButton
                        value={squares[5]}
                        onSquaresClick={() => handleClick(5)}
                    />
                </div>
                <div className='table-row'>
                    <FieldButton
                        value={squares[6]}
                        onSquaresClick={() => handleClick(6)}
                    />
                    <FieldButton
                        value={squares[7]}
                        onSquaresClick={() => handleClick(7)}
                    />
                    <FieldButton
                        value={squares[8]}
                        onSquaresClick={() => handleClick(8)}
                    />
                </div>
            </div>

            <div>
                <div className="status">
                    <p>{status}</p>

                </div>
                {ShowData &&
                    <div className="reset-game">
                        <button className="reset-btn" onClick={resetGame}>
                            Сбросить игру
                        </button>
                        {saveResults}
                    </div>}
            </div>
        </section>
    );
}

export default GameField;